/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-05-26 09:27:53
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 11:35:36
 * @Descripttion: 
 */
import { JSEncrypt } from 'jsencrypt';

const PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaYUcGq16R4iX5JaBka4O2TA63LdGItikb3zRCJacVEjn7m15PSID93Yddc0IGGbdmDUP7Fno1lzHgt1cmsKwg0tRWjMnvVFClKq7x82hBNHWlYb2C1ec1u/h+zWl15aqULdnJoiOkm24yKjkHu6SHKFlOReyzCphwukXndkHA2wIDAQAB';

export const encryptString = function(param: string) {
	const jsencrypt = new JSEncrypt();
	jsencrypt.setPublicKey(PUBLIC_KEY);
	const enData = jsencrypt.encrypt(param);
	return String(enData);
}