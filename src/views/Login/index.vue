<!--
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-05-26 09:07:25
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 13:25:38
 * @Descripttion: 
-->
<template>
  <div class="login-box">
    <a-form
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item>
        <a-input v-model:value="formState.userName" placeholder="Username">
          <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="formState.password" type="password" placeholder="password">
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="formState.checkyzm" type="checkyzm" placeholder="checkyzm"  style="width: calc(100% - 68px)"></a-input>
        <img :src="backurl" @click="getcode" style="width: 60px;height: 100%;float: right;">
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 100%;"
          :disabled="formState.userName === '' || formState.password === '' || formState.checkyzm === ''"
        >
          {{t('login')}}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { encryptString } from '@/common/jsencryptEntry';
import { loginRequest, getResourceTree } from './api';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { reactive, UnwrapRef, ref } from 'vue';
interface FormState {
  userName: string;
  password: string;
  checkyzm: string;
}
const randomNum = ref<string | number>('');
const backurl = ref<string>(`/yyzt-web/auth/authCode.do`);
const formState: UnwrapRef<FormState> = reactive({
  userName: '',
  password: '',
  checkyzm: '',
});
const getcode = () => {
  randomNum.value = parseInt(
    String(Math.random() * 100000)
  );
  backurl.value = `/yyzt-web/auth/authCode.do` + `?randomNum=${randomNum.value}`;
};
const handleFinish = async (values: FormState) => {
  try {
    const loginNameAndP = {
      loginName: formState.userName,
      password: formState.password
    };
    const loginStr = String(JSON.stringify(loginNameAndP));
    const loginParams = {
      sign: encodeURI(encryptString(loginStr)),
      authCode: formState.checkyzm,
      randomNum: randomNum.value,
    };
    const res = await loginRequest(loginParams) as any;
    localStorage.Token = res.token;
    sessionStorage.useinfo = JSON.stringify(res);
    handleUpdateMenu();
  } catch (e) {
    console.warn(e);
    getcode();
  }
};
const handleUpdateMenu = async () => {
  try {
    const res = await getResourceTree({}) as any;
    if (!res || !res.length) {
      return;
    }
    const allMenu = [...res] as any;
    const menuList = [] as any;
    allMenu.forEach((element: any) => {
      const {title, children} = element;
      if (['运营平台'].includes(title) && children) {
        menuList.push(...children);
      }
    });
    localStorage.setItem('menuListAll', JSON.stringify(allMenu));
    localStorage.setItem('menuList', JSON.stringify(menuList));
    router.push(menuList[0].children[0].name);
  } catch(e) {
    console.warn(e);
  }
};
const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
  console.warn(errors);
};
</script>
<style scoped>
.login-box {
  width: 300px;
  margin: 50% auto 0;
  transform: translateY(-100%);
  box-shadow: 0 0 2px 2px #eee;
  padding: 16px;
  border-radius: 8px;
}
</style>
