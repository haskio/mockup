/*
 Navicat Premium Data Transfer

 Source Server         : 本机8
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : mockup

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 12/08/2023 23:29:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for casbin_rule
-- ----------------------------
DROP TABLE IF EXISTS `casbin_rule`;
CREATE TABLE `casbin_rule`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ptype` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v0` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v1` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v2` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v3` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v4` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v5` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v6` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v7` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `idx_casbin_rule`(`ptype` ASC, `v0` ASC, `v1` ASC, `v2` ASC, `v3` ASC, `v4` ASC, `v5` ASC, `v6` ASC, `v7` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 631 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of casbin_rule
-- ----------------------------
INSERT INTO `casbin_rule` VALUES (748, 'p', '888', '/api/createApi', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (749, 'p', '888', '/api/deleteApi', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (754, 'p', '888', '/api/deleteApisByIds', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (752, 'p', '888', '/api/getAllApis', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (753, 'p', '888', '/api/getApiById', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (751, 'p', '888', '/api/getApiList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (750, 'p', '888', '/api/updateApi', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (755, 'p', '888', '/authority/copyAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (756, 'p', '888', '/authority/createAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (757, 'p', '888', '/authority/deleteAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (759, 'p', '888', '/authority/getAuthorityList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (760, 'p', '888', '/authority/setDataAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (758, 'p', '888', '/authority/updateAuthority', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (824, 'p', '888', '/authorityBtn/canRemoveAuthorityBtn', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (823, 'p', '888', '/authorityBtn/getAuthorityBtn', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (822, 'p', '888', '/authorityBtn/setAuthorityBtn', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (796, 'p', '888', '/autoCode/createPackage', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (793, 'p', '888', '/autoCode/createPlug', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (790, 'p', '888', '/autoCode/createTemp', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (798, 'p', '888', '/autoCode/delPackage', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (802, 'p', '888', '/autoCode/delSysHistory', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (792, 'p', '888', '/autoCode/getColumn', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (788, 'p', '888', '/autoCode/getDB', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (799, 'p', '888', '/autoCode/getMeta', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (797, 'p', '888', '/autoCode/getPackage', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (801, 'p', '888', '/autoCode/getSysHistory', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (789, 'p', '888', '/autoCode/getTables', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (794, 'p', '888', '/autoCode/installPlugin', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (791, 'p', '888', '/autoCode/preview', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (795, 'p', '888', '/autoCode/pubPlug', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (800, 'p', '888', '/autoCode/rollback', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (762, 'p', '888', '/casbin/getPolicyPathByAuthorityId', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (761, 'p', '888', '/casbin/updateCasbin', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (826, 'p', '888', '/chatGpt/createSK', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (828, 'p', '888', '/chatGpt/deleteSK', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (827, 'p', '888', '/chatGpt/getSK', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (825, 'p', '888', '/chatGpt/getTable', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (785, 'p', '888', '/customer/customer', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (786, 'p', '888', '/customer/customer', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (784, 'p', '888', '/customer/customer', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (783, 'p', '888', '/customer/customer', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (787, 'p', '888', '/customer/customerList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (821, 'p', '888', '/email/emailTest', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (773, 'p', '888', '/fileUploadAndDownload/breakpointContinue', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (774, 'p', '888', '/fileUploadAndDownload/breakpointContinueFinish', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (777, 'p', '888', '/fileUploadAndDownload/deleteFile', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (778, 'p', '888', '/fileUploadAndDownload/editFileName', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (772, 'p', '888', '/fileUploadAndDownload/findFile', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (779, 'p', '888', '/fileUploadAndDownload/getFileList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (775, 'p', '888', '/fileUploadAndDownload/removeChunk', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (776, 'p', '888', '/fileUploadAndDownload/upload', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (736, 'p', '888', '/jwt/jsonInBlacklist', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (763, 'p', '888', '/menu/addBaseMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (771, 'p', '888', '/menu/addMenuAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (765, 'p', '888', '/menu/deleteBaseMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (767, 'p', '888', '/menu/getBaseMenuById', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (769, 'p', '888', '/menu/getBaseMenuTree', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (764, 'p', '888', '/menu/getMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (770, 'p', '888', '/menu/getMenuAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (768, 'p', '888', '/menu/getMenuList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (766, 'p', '888', '/menu/updateBaseMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (829, 'p', '888', '/pdMock/createPdMock', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (830, 'p', '888', '/pdMock/deletePdMock', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (831, 'p', '888', '/pdMock/deletePdMockByIds', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (833, 'p', '888', '/pdMock/findPdMock', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (834, 'p', '888', '/pdMock/getPdMockList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (832, 'p', '888', '/pdMock/updatePdMock', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (835, 'p', '888', '/pdRelease/createPdRelease', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (836, 'p', '888', '/pdRelease/deletePdRelease', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (837, 'p', '888', '/pdRelease/deletePdReleaseByIds', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (839, 'p', '888', '/pdRelease/findPdRelease', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (840, 'p', '888', '/pdRelease/getPdReleaseList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (838, 'p', '888', '/pdRelease/updatePdRelease', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (819, 'p', '888', '/simpleUploader/checkFileMd5', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (820, 'p', '888', '/simpleUploader/mergeFileMd5', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (818, 'p', '888', '/simpleUploader/upload', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (808, 'p', '888', '/sysDictionary/createSysDictionary', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (809, 'p', '888', '/sysDictionary/deleteSysDictionary', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (811, 'p', '888', '/sysDictionary/findSysDictionary', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (812, 'p', '888', '/sysDictionary/getSysDictionaryList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (810, 'p', '888', '/sysDictionary/updateSysDictionary', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (804, 'p', '888', '/sysDictionaryDetail/createSysDictionaryDetail', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (805, 'p', '888', '/sysDictionaryDetail/deleteSysDictionaryDetail', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (806, 'p', '888', '/sysDictionaryDetail/findSysDictionaryDetail', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (807, 'p', '888', '/sysDictionaryDetail/getSysDictionaryDetailList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (803, 'p', '888', '/sysDictionaryDetail/updateSysDictionaryDetail', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (813, 'p', '888', '/sysOperationRecord/createSysOperationRecord', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (816, 'p', '888', '/sysOperationRecord/deleteSysOperationRecord', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (817, 'p', '888', '/sysOperationRecord/deleteSysOperationRecordByIds', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (814, 'p', '888', '/sysOperationRecord/findSysOperationRecord', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (815, 'p', '888', '/sysOperationRecord/getSysOperationRecordList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (780, 'p', '888', '/system/getServerInfo', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (781, 'p', '888', '/system/getSystemConfig', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (782, 'p', '888', '/system/setSystemConfig', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (738, 'p', '888', '/user/admin_register', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (744, 'p', '888', '/user/changePassword', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (737, 'p', '888', '/user/deleteUser', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (747, 'p', '888', '/user/getUser', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (742, 'p', '888', '/user/getUserInfo', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (739, 'p', '888', '/user/getUserList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (746, 'p', '888', '/user/resetPassword', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (741, 'p', '888', '/user/setSelfInfo', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (743, 'p', '888', '/user/setUserAuthorities', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (745, 'p', '888', '/user/setUserAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (740, 'p', '888', '/user/setUserInfo', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (849, 'p', '9528', '/api/createApi', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (850, 'p', '9528', '/api/deleteApi', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (853, 'p', '9528', '/api/getAllApis', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (854, 'p', '9528', '/api/getApiById', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (852, 'p', '9528', '/api/getApiList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (851, 'p', '9528', '/api/updateApi', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (855, 'p', '9528', '/authority/createAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (856, 'p', '9528', '/authority/deleteAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (857, 'p', '9528', '/authority/getAuthorityList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (858, 'p', '9528', '/authority/setDataAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (881, 'p', '9528', '/autoCode/createTemp', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (860, 'p', '9528', '/casbin/getPolicyPathByAuthorityId', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (859, 'p', '9528', '/casbin/updateCasbin', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (878, 'p', '9528', '/customer/customer', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (879, 'p', '9528', '/customer/customer', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (877, 'p', '9528', '/customer/customer', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (876, 'p', '9528', '/customer/customer', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (880, 'p', '9528', '/customer/customerList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (871, 'p', '9528', '/fileUploadAndDownload/deleteFile', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (872, 'p', '9528', '/fileUploadAndDownload/editFileName', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (873, 'p', '9528', '/fileUploadAndDownload/getFileList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (870, 'p', '9528', '/fileUploadAndDownload/upload', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (841, 'p', '9528', '/jwt/jsonInBlacklist', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (861, 'p', '9528', '/menu/addBaseMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (869, 'p', '9528', '/menu/addMenuAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (863, 'p', '9528', '/menu/deleteBaseMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (865, 'p', '9528', '/menu/getBaseMenuById', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (867, 'p', '9528', '/menu/getBaseMenuTree', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (862, 'p', '9528', '/menu/getMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (868, 'p', '9528', '/menu/getMenuAuthority', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (866, 'p', '9528', '/menu/getMenuList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (864, 'p', '9528', '/menu/updateBaseMenu', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (882, 'p', '9528', '/pdMock/createPdMock', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (883, 'p', '9528', '/pdMock/deletePdMock', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (884, 'p', '9528', '/pdMock/deletePdMockByIds', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (886, 'p', '9528', '/pdMock/findPdMock', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (887, 'p', '9528', '/pdMock/getPdMockList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (885, 'p', '9528', '/pdMock/updatePdMock', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (888, 'p', '9528', '/pdRelease/createPdRelease', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (889, 'p', '9528', '/pdRelease/deletePdRelease', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (890, 'p', '9528', '/pdRelease/deletePdReleaseByIds', 'DELETE', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (892, 'p', '9528', '/pdRelease/findPdRelease', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (893, 'p', '9528', '/pdRelease/getPdReleaseList', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (891, 'p', '9528', '/pdRelease/updatePdRelease', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (874, 'p', '9528', '/system/getSystemConfig', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (875, 'p', '9528', '/system/setSystemConfig', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (842, 'p', '9528', '/user/admin_register', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (846, 'p', '9528', '/user/changePassword', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (848, 'p', '9528', '/user/getUser', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (845, 'p', '9528', '/user/getUserInfo', 'GET', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (843, 'p', '9528', '/user/getUserList', 'POST', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (844, 'p', '9528', '/user/setSelfInfo', 'PUT', '', '', '', '', '');
INSERT INTO `casbin_rule` VALUES (847, 'p', '9528', '/user/setUserAuthority', 'POST', '', '', '', '', '');

-- ----------------------------
-- Table structure for exa_customers
-- ----------------------------
DROP TABLE IF EXISTS `exa_customers`;
CREATE TABLE `exa_customers`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `customer_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '客户名',
  `customer_phone_data` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '客户手机号',
  `sys_user_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '管理ID',
  `sys_user_authority_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '管理角色ID',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_exa_customers_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of exa_customers
-- ----------------------------

-- ----------------------------
-- Table structure for exa_file_chunks
-- ----------------------------
DROP TABLE IF EXISTS `exa_file_chunks`;
CREATE TABLE `exa_file_chunks`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `exa_file_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `file_chunk_number` bigint(20) NULL DEFAULT NULL,
  `file_chunk_path` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_exa_file_chunks_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of exa_file_chunks
-- ----------------------------

-- ----------------------------
-- Table structure for exa_file_upload_and_downloads
-- ----------------------------
DROP TABLE IF EXISTS `exa_file_upload_and_downloads`;
CREATE TABLE `exa_file_upload_and_downloads`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文件名',
  `url` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文件地址',
  `tag` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文件标签',
  `key` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '编号',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_exa_file_upload_and_downloads_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of exa_file_upload_and_downloads
-- ----------------------------
INSERT INTO `exa_file_upload_and_downloads` VALUES (1, '2023-07-09 23:26:34.861', '2023-07-09 23:26:34.861', NULL, '10.png', 'https://qmplusimg.henrongyi.top/gvalogo.png', 'png', '158787308910.png');
INSERT INTO `exa_file_upload_and_downloads` VALUES (2, '2023-07-09 23:26:34.861', '2023-07-09 23:26:34.861', NULL, 'logo.png', 'https://qmplusimg.henrongyi.top/1576554439myAvatar.png', 'png', '1587973709logo.png');

-- ----------------------------
-- Table structure for exa_files
-- ----------------------------
DROP TABLE IF EXISTS `exa_files`;
CREATE TABLE `exa_files`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `file_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file_md5` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file_path` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `chunk_total` bigint(20) NULL DEFAULT NULL,
  `is_finish` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_exa_files_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of exa_files
-- ----------------------------

-- ----------------------------
-- Table structure for jwt_blacklists
-- ----------------------------
DROP TABLE IF EXISTS `jwt_blacklists`;
CREATE TABLE `jwt_blacklists`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `jwt` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'jwt',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_jwt_blacklists_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of jwt_blacklists
-- ----------------------------
INSERT INTO `jwt_blacklists` VALUES (1, '2023-07-13 18:14:20.419', '2023-07-13 18:14:20.419', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiYjU4MDE1M2UtY2FkMi00YTEzLTk3M2ItYTFiODM1NmRkYjljIiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Ik1yLuWlh-a3vCIsIkF1dGhvcml0eUlkIjo4ODgsIkJ1ZmZlclRpbWUiOjg2NDAwLCJpc3MiOiJxbVBsdXMiLCJhdWQiOlsiR1ZBIl0sImV4cCI6MTY4OTc2NjI1OSwibmJmIjoxNjg5MTYxNDU5fQ.I4rwAJnFvmniEgtPIYqFGViL_MdRVfIA-wRS0o-acy0');



-- ----------------------------
-- Table structure for sys_api
-- ----------------------------
DROP TABLE IF EXISTS `sys_api`;
CREATE TABLE `sys_api`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键编码',
  `handle` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'handle',
  `title` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '标题',
  `path` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '地址',
  `type` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '接口类型',
  `action` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '请求类型',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_api_deleted_at`(`deleted_at` ASC) USING BTREE,
  INDEX `idx_sys_api_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_api_update_by`(`update_by` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 159 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_api
-- ----------------------------
INSERT INTO `sys_api` VALUES (5, 'go-admin/app/admin/apis.SysLoginLog.Get-fm', '登录日志通过id获取', '/api/v1/sys-login-log/:id', 'BUS', 'GET', '2021-05-13 19:59:00.728', '2021-06-17 11:37:12.331', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (6, 'go-admin/app/admin/apis.SysOperaLog.GetPage-fm', '操作日志列表', '/api/v1/sys-opera-log', 'BUS', 'GET', '2021-05-13 19:59:00.778', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (7, 'go-admin/app/admin/apis.SysOperaLog.Get-fm', '操作日志通过id获取', '/api/v1/sys-opera-log/:id', 'BUS', 'GET', '2021-05-13 19:59:00.821', '2021-06-16 21:49:48.598', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (8, 'go-admin/common/actions.IndexAction.func1', '分类列表', '/api/v1/syscategory', 'BUS', 'GET', '2021-05-13 19:59:00.870', '2021-06-13 20:53:47.883', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (9, 'go-admin/common/actions.ViewAction.func1', '分类通过id获取', '/api/v1/syscategory/:id', 'BUS', 'GET', '2021-05-13 19:59:00.945', '2021-06-13 20:53:47.926', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (10, 'go-admin/common/actions.IndexAction.func1', '内容列表', '/api/v1/syscontent', 'BUS', 'GET', '2021-05-13 19:59:01.005', '2021-06-13 20:53:47.966', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (11, 'go-admin/common/actions.ViewAction.func1', '内容通过id获取', '/api/v1/syscontent/:id', 'BUS', 'GET', '2021-05-13 19:59:01.056', '2021-06-13 20:53:48.005', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (15, 'go-admin/common/actions.IndexAction.func1', 'job列表', '/api/v1/sysjob', 'BUS', 'GET', '2021-05-13 19:59:01.248', '2021-06-13 20:53:48.169', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (16, 'go-admin/common/actions.ViewAction.func1', 'job通过id获取', '/api/v1/sysjob/:id', 'BUS', 'GET', '2021-05-13 19:59:01.298', '2021-06-13 20:53:48.214', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (21, 'go-admin/app/admin/apis.SysDictType.GetPage-fm', '字典类型列表', '/api/v1/dict/type', 'BUS', 'GET', '2021-05-13 19:59:01.525', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (22, 'go-admin/app/admin/apis.SysDictType.GetAll-fm', '字典类型查询【代码生成】', '/api/v1/dict/type-option-select', 'SYS', 'GET', '2021-05-13 19:59:01.582', '2021-06-13 20:53:48.388', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (23, 'go-admin/app/admin/apis.SysDictType.Get-fm', '字典类型通过id获取', '/api/v1/dict/type/:id', 'BUS', 'GET', '2021-05-13 19:59:01.632', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (24, 'go-admin/app/admin/apis.SysDictData.GetPage-fm', '字典数据列表', '/api/v1/dict/data', 'BUS', 'GET', '2021-05-13 19:59:01.684', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (25, 'go-admin/app/admin/apis.SysDictData.Get-fm', '字典数据通过code获取', '/api/v1/dict/data/:dictCode', 'BUS', 'GET', '2021-05-13 19:59:01.732', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (26, 'go-admin/app/admin/apis.SysDictData.GetSysDictDataAll-fm', '数据字典根据key获取', '/api/v1/dict-data/option-select', 'SYS', 'GET', '2021-05-13 19:59:01.832', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (27, 'go-admin/app/admin/apis.SysDept.GetPage-fm', '部门列表', '/api/v1/dept', 'BUS', 'GET', '2021-05-13 19:59:01.940', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (28, 'go-admin/app/admin/apis.SysDept.Get-fm', '部门通过id获取', '/api/v1/dept/:id', 'BUS', 'GET', '2021-05-13 19:59:02.009', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (29, 'go-admin/app/admin/apis.SysDept.Get2Tree-fm', '查询部门下拉树【角色权限-自定权限】', '/api/v1/deptTree', 'SYS', 'GET', '2021-05-13 19:59:02.050', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (30, 'go-admin/app/admin/apis/tools.(*Gen).GetDBTableList-fm', '数据库表列表', '/api/v1/db/tables/page', 'SYS', 'GET', '2021-05-13 19:59:02.098', '2021-06-13 20:53:48.730', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (31, 'go-admin/app/admin/apis/tools.(*Gen).GetDBColumnList-fm', '数据表列列表', '/api/v1/db/columns/page', 'SYS', 'GET', '2021-05-13 19:59:02.140', '2021-06-13 20:53:48.771', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (32, 'go-admin/app/admin/apis/tools.Gen.GenCode-fm', '数据库表生成到项目', '/api/v1/gen/toproject/:tableId', 'SYS', 'GET', '2021-05-13 19:59:02.183', '2021-06-13 20:53:48.812', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (33, 'go-admin/app/admin/apis/tools.Gen.GenMenuAndApi-fm', '数据库表生成到DB', '/api/v1/gen/todb/:tableId', 'SYS', 'GET', '2021-05-13 19:59:02.227', '2021-06-13 20:53:48.853', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (34, 'go-admin/app/admin/apis/tools.(*SysTable).GetSysTablesTree-fm', '关系表数据【代码生成】', '/api/v1/gen/tabletree', 'SYS', 'GET', '2021-05-13 19:59:02.271', '2021-06-13 20:53:48.893', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (35, 'go-admin/app/admin/apis/tools.Gen.Preview-fm', '生成预览通过id获取', '/api/v1/gen/preview/:tableId', 'SYS', 'GET', '2021-05-13 19:59:02.315', '2021-06-13 20:53:48.935', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (36, 'go-admin/app/admin/apis/tools.Gen.GenApiToFile-fm', '生成api带文件', '/api/v1/gen/apitofile/:tableId', 'SYS', 'GET', '2021-05-13 19:59:02.357', '2021-06-13 20:53:48.977', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (37, 'go-admin/app/admin/apis.System.GenerateCaptchaHandler-fm', '验证码获取', '/api/v1/getCaptcha', 'SYS', 'GET', '2021-05-13 19:59:02.405', '2021-06-13 20:53:49.020', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (38, 'go-admin/app/admin/apis.SysUser.GetInfo-fm', '用户信息获取', '/api/v1/getinfo', 'SYS', 'GET', '2021-05-13 19:59:02.447', '2021-06-13 20:53:49.065', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (39, 'go-admin/app/admin/apis.SysMenu.GetPage-fm', '菜单列表', '/api/v1/menu', 'BUS', 'GET', '2021-05-13 19:59:02.497', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (40, 'go-admin/app/admin/apis.SysMenu.GetMenuTreeSelect-fm', '查询菜单下拉树结构【废弃】', '/api/v1/menuTreeselect', 'SYS', 'GET', '2021-05-13 19:59:02.542', '2021-06-03 22:37:21.857', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (41, 'go-admin/app/admin/apis.SysMenu.Get-fm', '菜单通过id获取', '/api/v1/menu/:id', 'BUS', 'GET', '2021-05-13 19:59:02.584', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (42, 'go-admin/app/admin/apis.SysMenu.GetMenuRole-fm', '角色菜单【顶部左侧菜单】', '/api/v1/menurole', 'SYS', 'GET', '2021-05-13 19:59:02.630', '2021-06-13 20:53:49.574', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (43, 'go-admin/app/admin/apis.SysMenu.GetMenuIDS-fm', '获取角色对应的菜单id数组【废弃】', '/api/v1/menuids', 'SYS', 'GET', '2021-05-13 19:59:02.675', '2021-06-03 22:39:52.500', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (44, 'go-admin/app/admin/apis.SysRole.GetPage-fm', '角色列表', '/api/v1/role', 'BUS', 'GET', '2021-05-13 19:59:02.720', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (45, 'go-admin/app/admin/apis.SysMenu.GetMenuTreeSelect-fm', '菜单权限列表【角色配菜单使用】', '/api/v1/roleMenuTreeselect/:roleId', 'SYS', 'GET', '2021-05-13 19:59:02.762', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (46, 'go-admin/app/admin/apis.SysDept.GetDeptTreeRoleSelect-fm', '角色部门结构树【自定义数据权限】', '/api/v1/roleDeptTreeselect/:roleId', 'SYS', 'GET', '2021-05-13 19:59:02.809', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (47, 'go-admin/app/admin/apis.SysRole.Get-fm', '角色通过id获取', '/api/v1/role/:id', 'BUS', 'GET', '2021-05-13 19:59:02.850', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (48, 'github.com/go-admin-team/go-admin-core/sdk/pkg/jwtauth.(*GinJWTMiddleware).RefreshHandler-fm', '刷新token', '/api/v1/refresh_token', 'SYS', 'GET', '2021-05-13 19:59:02.892', '2021-06-13 20:53:49.278', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (53, 'go-admin/app/admin/apis.SysConfig.GetPage-fm', '参数列表', '/api/v1/config', 'BUS', 'GET', '2021-05-13 19:59:03.116', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (54, 'go-admin/app/admin/apis.SysConfig.Get-fm', '参数通过id获取', '/api/v1/config/:id', 'BUS', 'GET', '2021-05-13 19:59:03.157', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (55, 'go-admin/app/admin/apis.SysConfig.GetSysConfigByKEYForService-fm', '参数通过键名搜索【基础默认配置】', '/api/v1/configKey/:configKey', 'SYS', 'GET', '2021-05-13 19:59:03.198', '2021-06-13 20:53:49.745', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (57, 'go-admin/app/jobs/apis.SysJob.RemoveJobForService-fm', 'job移除', '/api/v1/job/remove/:id', 'BUS', 'GET', '2021-05-13 19:59:03.295', '2021-06-13 20:53:49.786', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (58, 'go-admin/app/jobs/apis.SysJob.StartJobForService-fm', 'job启动', '/api/v1/job/start/:id', 'BUS', 'GET', '2021-05-13 19:59:03.339', '2021-06-13 20:53:49.829', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (59, 'go-admin/app/admin/apis.SysPost.GetPage-fm', '岗位列表', '/api/v1/post', 'BUS', 'GET', '2021-05-13 19:59:03.381', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (60, 'go-admin/app/admin/apis.SysPost.Get-fm', '岗位通过id获取', '/api/v1/post/:id', 'BUS', 'GET', '2021-05-13 19:59:03.433', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (62, 'go-admin/app/admin/apis.SysConfig.GetSysConfigBySysApp-fm', '系统前端参数', '/api/v1/app-config', 'SYS', 'GET', '2021-05-13 19:59:03.526', '2021-06-13 20:53:49.994', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (63, 'go-admin/app/admin/apis.SysUser.GetProfile-fm', '*用户信息获取', '/api/v1/user/profile', 'SYS', 'GET', '2021-05-13 19:59:03.567', '2021-06-13 20:53:50.038', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (66, 'github.com/go-admin-team/go-admin-core/sdk/pkg/ws.(*Manager).WsClient-fm', '链接ws【定时任务log】', '/ws/:id/:channel', 'BUS', 'GET', '2021-05-13 19:59:03.705', '2021-06-13 20:53:50.167', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (67, 'github.com/go-admin-team/go-admin-core/sdk/pkg/ws.(*Manager).UnWsClient-fm', '退出ws【定时任务log】', '/wslogout/:id/:channel', 'BUS', 'GET', '2021-05-13 19:59:03.756', '2021-06-13 20:53:50.209', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (68, 'go-admin/common/middleware/handler.Ping', '*用户基本信息', '/info', 'SYS', 'GET', '2021-05-13 19:59:03.800', '2021-06-13 20:53:50.251', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (72, 'go-admin/common/actions.CreateAction.func1', '分类创建', '/api/v1/syscategory', 'BUS', 'POST', '2021-05-13 19:59:03.982', '2021-06-13 20:53:50.336', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (73, 'go-admin/common/actions.CreateAction.func1', '内容创建', '/api/v1/syscontent', 'BUS', 'POST', '2021-05-13 19:59:04.027', '2021-06-13 20:53:50.375', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (76, 'go-admin/common/actions.CreateAction.func1', 'job创建', '/api/v1/sysjob', 'BUS', 'POST', '2021-05-13 19:59:04.164', '2021-06-13 20:53:50.500', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (80, 'go-admin/app/admin/apis.SysDictData.Insert-fm', '字典数据创建', '/api/v1/dict/data', 'BUS', 'POST', '2021-05-13 19:59:04.347', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (81, 'go-admin/app/admin/apis.SysDictType.Insert-fm', '字典类型创建', '/api/v1/dict/type', 'BUS', 'POST', '2021-05-13 19:59:04.391', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (82, 'go-admin/app/admin/apis.SysDept.Insert-fm', '部门创建', '/api/v1/dept', 'BUS', 'POST', '2021-05-13 19:59:04.435', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (85, 'github.com/go-admin-team/go-admin-core/sdk/pkg/jwtauth.(*GinJWTMiddleware).LoginHandler-fm', '*登录', '/api/v1/login', 'SYS', 'POST', '2021-05-13 19:59:04.597', '2021-06-13 20:53:50.784', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (86, 'go-admin/common/middleware/handler.LogOut', '*退出', '/api/v1/logout', 'SYS', 'POST', '2021-05-13 19:59:04.642', '2021-06-13 20:53:50.824', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (87, 'go-admin/app/admin/apis.SysConfig.Insert-fm', '参数创建', '/api/v1/config', 'BUS', 'POST', '2021-05-13 19:59:04.685', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (88, 'go-admin/app/admin/apis.SysMenu.Insert-fm', '菜单创建', '/api/v1/menu', 'BUS', 'POST', '2021-05-13 19:59:04.777', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (89, 'go-admin/app/admin/apis.SysPost.Insert-fm', '岗位创建', '/api/v1/post', 'BUS', 'POST', '2021-05-13 19:59:04.886', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (90, 'go-admin/app/admin/apis.SysRole.Insert-fm', '角色创建', '/api/v1/role', 'BUS', 'POST', '2021-05-13 19:59:04.975', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (91, 'go-admin/app/admin/apis.SysUser.InsetAvatar-fm', '*用户头像编辑', '/api/v1/user/avatar', 'SYS', 'POST', '2021-05-13 19:59:05.058', '2021-06-13 20:53:51.079', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (92, 'go-admin/app/admin/apis.SysApi.Update-fm', '接口编辑', '/api/v1/sys-api/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.122', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (95, 'go-admin/common/actions.UpdateAction.func1', '分类编辑', '/api/v1/syscategory/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.255', '2021-06-13 20:53:51.247', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (96, 'go-admin/common/actions.UpdateAction.func1', '内容编辑', '/api/v1/syscontent/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.299', '2021-06-13 20:53:51.289', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (97, 'go-admin/common/actions.UpdateAction.func1', 'job编辑', '/api/v1/sysjob', 'BUS', 'PUT', '2021-05-13 19:59:05.343', '2021-06-13 20:53:51.331', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (101, 'go-admin/app/admin/apis.SysDictData.Update-fm', '字典数据编辑', '/api/v1/dict/data/:dictCode', 'BUS', 'PUT', '2021-05-13 19:59:05.519', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (102, 'go-admin/app/admin/apis.SysDictType.Update-fm', '字典类型编辑', '/api/v1/dict/type/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.569', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (103, 'go-admin/app/admin/apis.SysDept.Update-fm', '部门编辑', '/api/v1/dept/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.613', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (104, 'go-admin/app/other/apis.SysFileDir.Update-fm', '文件夹编辑', '/api/v1/file-dir/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.662', '2021-06-13 20:53:51.847', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (105, 'go-admin/app/other/apis.SysFileInfo.Update-fm', '文件编辑', '/api/v1/file-info/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.709', '2021-06-13 20:53:51.892', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (106, 'go-admin/app/admin/apis.SysRole.Update-fm', '角色编辑', '/api/v1/role/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.752', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (107, 'go-admin/app/admin/apis.SysRole.Update2DataScope-fm', '角色数据权限修改', '/api/v1/roledatascope', 'BUS', 'PUT', '2021-05-13 19:59:05.803', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (108, 'go-admin/app/admin/apis.SysConfig.Update-fm', '参数编辑', '/api/v1/config/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.848', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (109, 'go-admin/app/admin/apis.SysMenu.Update-fm', '编辑菜单', '/api/v1/menu/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.891', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (110, 'go-admin/app/admin/apis.SysPost.Update-fm', '岗位编辑', '/api/v1/post/:id', 'BUS', 'PUT', '2021-05-13 19:59:05.934', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (111, 'go-admin/app/admin/apis.SysUser.UpdatePwd-fm', '*用户修改密码', '/api/v1/user/pwd', 'SYS', 'PUT', '2021-05-13 19:59:05.987', '2021-06-13 20:53:51.724', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (112, 'go-admin/common/actions.DeleteAction.func1', '分类删除', '/api/v1/syscategory', 'BUS', 'DELETE', '2021-05-13 19:59:06.030', '2021-06-13 20:53:52.237', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (113, 'go-admin/common/actions.DeleteAction.func1', '内容删除', '/api/v1/syscontent', 'BUS', 'DELETE', '2021-05-13 19:59:06.076', '2021-06-13 20:53:52.278', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (114, 'go-admin/app/admin/apis.SysLoginLog.Delete-fm', '登录日志删除', '/api/v1/sys-login-log', 'BUS', 'DELETE', '2021-05-13 19:59:06.118', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (115, 'go-admin/app/admin/apis.SysOperaLog.Delete-fm', '操作日志删除', '/api/v1/sys-opera-log', 'BUS', 'DELETE', '2021-05-13 19:59:06.162', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (116, 'go-admin/common/actions.DeleteAction.func1', 'job删除', '/api/v1/sysjob', 'BUS', 'DELETE', '2021-05-13 19:59:06.206', '2021-06-13 20:53:52.323', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (117, 'go-admin/app/other/apis.SysChinaAreaData.Delete-fm', '行政区删除', '/api/v1/sys-area-data', 'BUS', 'DELETE', '2021-05-13 19:59:06.249', '2021-06-13 20:53:52.061', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (120, 'go-admin/app/admin/apis.SysDictData.Delete-fm', '字典数据删除', '/api/v1/dict/data', 'BUS', 'DELETE', '2021-05-13 19:59:06.387', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (121, 'go-admin/app/admin/apis.SysDictType.Delete-fm', '字典类型删除', '/api/v1/dict/type', 'BUS', 'DELETE', '2021-05-13 19:59:06.432', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (122, 'go-admin/app/admin/apis.SysDept.Delete-fm', '部门删除', '/api/v1/dept/:id', 'BUS', 'DELETE', '2021-05-13 19:59:06.475', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (123, 'go-admin/app/other/apis.SysFileDir.Delete-fm', '文件夹删除', '/api/v1/file-dir/:id', 'BUS', 'DELETE', '2021-05-13 19:59:06.520', '2021-06-13 20:53:52.539', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (124, 'go-admin/app/other/apis.SysFileInfo.Delete-fm', '文件删除', '/api/v1/file-info/:id', 'BUS', 'DELETE', '2021-05-13 19:59:06.566', '2021-06-13 20:53:52.580', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (125, 'go-admin/app/admin/apis.SysConfig.Delete-fm', '参数删除', '/api/v1/config', 'BUS', 'DELETE', '2021-05-13 19:59:06.612', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (126, 'go-admin/app/admin/apis.SysMenu.Delete-fm', '删除菜单', '/api/v1/menu', 'BUS', 'DELETE', '2021-05-13 19:59:06.654', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (127, 'go-admin/app/admin/apis.SysPost.Delete-fm', '岗位删除', '/api/v1/post/:id', 'BUS', 'DELETE', '2021-05-13 19:59:06.702', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (128, 'go-admin/app/admin/apis.SysRole.Delete-fm', '角色删除', '/api/v1/role', 'BUS', 'DELETE', '2021-05-13 19:59:06.746', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (131, 'github.com/go-admin-team/go-admin-core/tools/transfer.Handler.func1', '系统指标', '/api/v1/metrics', 'SYS', 'GET', '2021-05-17 22:13:55.933', '2021-06-13 20:53:49.614', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (132, 'go-admin/app/other/router.registerMonitorRouter.func1', '健康状态', '/api/v1/health', 'SYS', 'GET', '2021-05-17 22:13:56.285', '2021-06-13 20:53:49.951', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (133, 'go-admin/app/admin/apis.HelloWorld', '项目默认接口', '/', 'SYS', 'GET', '2021-05-24 10:30:44.553', '2021-06-13 20:53:47.406', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (134, 'go-admin/app/other/apis.ServerMonitor.ServerInfo-fm', '服务器基本状态', '/api/v1/server-monitor', 'SYS', 'GET', '2021-05-24 10:30:44.937', '2021-06-13 20:53:48.255', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (135, 'go-admin/app/admin/apis.SysApi.GetPage-fm', '接口列表', '/api/v1/sys-api', 'BUS', 'GET', '2021-05-24 11:37:53.303', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (136, 'go-admin/app/admin/apis.SysApi.Get-fm', '接口通过id获取', '/api/v1/sys-api/:id', 'BUS', 'GET', '2021-05-24 11:37:53.359', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (137, 'go-admin/app/admin/apis.SysLoginLog.GetPage-fm', '登录日志列表', '/api/v1/sys-login-log', 'BUS', 'GET', '2021-05-24 11:47:30.397', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (138, 'go-admin/app/other/apis.File.UploadFile-fm', '文件上传', '/api/v1/public/uploadFile', 'SYS', 'POST', '2021-05-25 19:16:18.493', '2021-06-13 20:53:50.866', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (139, 'go-admin/app/admin/apis.SysConfig.Update2Set-fm', '参数信息修改【参数配置】', '/api/v1/set-config', 'BUS', 'PUT', '2021-05-27 09:45:14.853', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (140, 'go-admin/app/admin/apis.SysConfig.Get2Set-fm', '参数获取全部【配置使用】', '/api/v1/set-config', 'BUS', 'GET', '2021-05-27 11:54:14.384', '2021-06-17 11:48:40.732', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (141, 'go-admin/app/admin/apis.SysUser.GetPage-fm', '管理员列表', '/api/v1/sys-user', 'BUS', 'GET', '2021-06-13 19:24:57.111', '2021-06-17 20:31:14.318', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (142, 'go-admin/app/admin/apis.SysUser.Get-fm', '管理员通过id获取', '/api/v1/sys-user/:id', 'BUS', 'GET', '2021-06-13 19:24:57.188', '2021-06-17 20:31:14.318', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (143, 'go-admin/app/admin/apis/tools.(*SysTable).GetSysTablesInfo-fm', '', '/api/v1/sys/tables/info', '', 'GET', '2021-06-13 19:24:57.437', '2021-06-13 20:53:48.047', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (144, 'go-admin/app/admin/apis/tools.(*SysTable).GetSysTables-fm', '', '/api/v1/sys/tables/info/:tableId', '', 'GET', '2021-06-13 19:24:57.510', '2021-06-13 20:53:48.088', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (145, 'go-admin/app/admin/apis/tools.(*SysTable).GetSysTableList-fm', '', '/api/v1/sys/tables/page', '', 'GET', '2021-06-13 19:24:57.582', '2021-06-13 20:53:48.128', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (146, 'github.com/gin-gonic/gin.(*RouterGroup).createStaticHandler.func1', '', '/static/*filepath', '', 'GET', '2021-06-13 19:24:59.641', '2021-06-13 20:53:50.081', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (147, 'github.com/swaggo/gin-swagger.CustomWrapHandler.func1', '', '/swagger/*any', '', 'GET', '2021-06-13 19:24:59.713', '2021-06-13 20:53:50.123', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (148, 'github.com/gin-gonic/gin.(*RouterGroup).createStaticHandler.func1', '', '/form-generator/*filepath', '', 'GET', '2021-06-13 19:24:59.914', '2021-06-13 20:53:50.295', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (149, 'go-admin/app/admin/apis/tools.(*SysTable).InsertSysTable-fm', '', '/api/v1/sys/tables/info', '', 'POST', '2021-06-13 19:25:00.163', '2021-06-13 20:53:50.539', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (150, 'go-admin/app/admin/apis.SysUser.Insert-fm', '管理员创建', '/api/v1/sys-user', 'BUS', 'POST', '2021-06-13 19:25:00.233', '2021-06-17 20:31:14.318', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (151, 'go-admin/app/admin/apis.SysUser.Update-fm', '管理员编辑', '/api/v1/sys-user', 'BUS', 'PUT', '2021-06-13 19:25:00.986', '2021-06-17 20:31:14.318', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (152, 'go-admin/app/admin/apis/tools.(*SysTable).UpdateSysTable-fm', '', '/api/v1/sys/tables/info', '', 'PUT', '2021-06-13 19:25:01.149', '2021-06-13 20:53:51.375', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (153, 'go-admin/app/admin/apis.SysRole.Update2Status-fm', '', '/api/v1/role-status', '', 'PUT', '2021-06-13 19:25:01.446', '2021-06-13 20:53:51.636', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (154, 'go-admin/app/admin/apis.SysUser.ResetPwd-fm', '', '/api/v1/user/pwd/reset', '', 'PUT', '2021-06-13 19:25:01.601', '2021-06-13 20:53:51.764', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (155, 'go-admin/app/admin/apis.SysUser.UpdateStatus-fm', '', '/api/v1/user/status', '', 'PUT', '2021-06-13 19:25:01.671', '2021-06-13 20:53:51.806', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (156, 'go-admin/app/admin/apis.SysUser.Delete-fm', '管理员删除', '/api/v1/sys-user', 'BUS', 'DELETE', '2021-06-13 19:25:02.043', '2021-06-17 20:31:14.318', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (157, 'go-admin/app/admin/apis/tools.(*SysTable).DeleteSysTables-fm', '', '/api/v1/sys/tables/info/:tableId', '', 'DELETE', '2021-06-13 19:25:02.283', '2021-06-13 20:53:52.367', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (158, 'github.com/gin-gonic/gin.(*RouterGroup).createStaticHandler.func1', '', '/static/*filepath', '', 'HEAD', '2021-06-13 19:25:02.734', '2021-06-13 20:53:52.791', NULL, 0, 0);
INSERT INTO `sys_api` VALUES (159, 'github.com/gin-gonic/gin.(*RouterGroup).createStaticHandler.func1', '', '/form-generator/*filepath', '', 'HEAD', '2021-06-13 19:25:02.808', '2021-06-13 20:53:52.838', NULL, 0, 0);

-- ----------------------------
-- Table structure for sys_apis
-- ----------------------------
DROP TABLE IF EXISTS `sys_apis`;
CREATE TABLE `sys_apis`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `path` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'api路径',
  `description` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'api中文描述',
  `api_group` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'api组',
  `method` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'POST' COMMENT '方法',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_apis_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 106 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_apis
-- ----------------------------
INSERT INTO `sys_apis` VALUES (1, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/jwt/jsonInBlacklist', 'jwt加入黑名单(退出，必选)', 'jwt', 'POST');
INSERT INTO `sys_apis` VALUES (2, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/deleteUser', '删除用户', '系统用户', 'DELETE');
INSERT INTO `sys_apis` VALUES (3, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/admin_register', '用户注册', '系统用户', 'POST');
INSERT INTO `sys_apis` VALUES (4, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/getUserList', '获取用户列表', '系统用户', 'POST');
INSERT INTO `sys_apis` VALUES (5, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/setUserInfo', '设置用户信息', '系统用户', 'PUT');
INSERT INTO `sys_apis` VALUES (6, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/setSelfInfo', '设置自身信息(必选)', '系统用户', 'PUT');
INSERT INTO `sys_apis` VALUES (7, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/getUserInfo', '获取自身信息(必选)', '系统用户', 'GET');
INSERT INTO `sys_apis` VALUES (8, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/setUserAuthorities', '设置权限组', '系统用户', 'POST');
INSERT INTO `sys_apis` VALUES (9, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/changePassword', '修改密码（建议选择)', '系统用户', 'POST');
INSERT INTO `sys_apis` VALUES (10, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/setUserAuthority', '修改用户角色(必选)', '系统用户', 'POST');
INSERT INTO `sys_apis` VALUES (11, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/user/resetPassword', '重置用户密码', '系统用户', 'POST');
INSERT INTO `sys_apis` VALUES (12, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/api/createApi', '创建api', 'api', 'POST');
INSERT INTO `sys_apis` VALUES (13, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/api/deleteApi', '删除Api', 'api', 'POST');
INSERT INTO `sys_apis` VALUES (14, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/api/updateApi', '更新Api', 'api', 'POST');
INSERT INTO `sys_apis` VALUES (15, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/api/getApiList', '获取api列表', 'api', 'POST');
INSERT INTO `sys_apis` VALUES (16, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/api/getAllApis', '获取所有api', 'api', 'POST');
INSERT INTO `sys_apis` VALUES (17, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/api/getApiById', '获取api详细信息', 'api', 'POST');
INSERT INTO `sys_apis` VALUES (18, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/api/deleteApisByIds', '批量删除api', 'api', 'DELETE');
INSERT INTO `sys_apis` VALUES (19, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authority/copyAuthority', '拷贝角色', '角色', 'POST');
INSERT INTO `sys_apis` VALUES (20, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authority/createAuthority', '创建角色', '角色', 'POST');
INSERT INTO `sys_apis` VALUES (21, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authority/deleteAuthority', '删除角色', '角色', 'POST');
INSERT INTO `sys_apis` VALUES (22, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authority/updateAuthority', '更新角色信息', '角色', 'PUT');
INSERT INTO `sys_apis` VALUES (23, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authority/getAuthorityList', '获取角色列表', '角色', 'POST');
INSERT INTO `sys_apis` VALUES (24, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authority/setDataAuthority', '设置角色资源权限', '角色', 'POST');
INSERT INTO `sys_apis` VALUES (25, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/casbin/updateCasbin', '更改角色api权限', 'casbin', 'POST');
INSERT INTO `sys_apis` VALUES (26, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/casbin/getPolicyPathByAuthorityId', '获取权限列表', 'casbin', 'POST');
INSERT INTO `sys_apis` VALUES (27, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/addBaseMenu', '新增菜单', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (28, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/getMenu', '获取菜单树(必选)', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (29, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/deleteBaseMenu', '删除菜单', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (30, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/updateBaseMenu', '更新菜单', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (31, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/getBaseMenuById', '根据id获取菜单', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (32, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/getMenuList', '分页获取基础menu列表', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (33, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/getBaseMenuTree', '获取用户动态路由', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (34, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/getMenuAuthority', '获取指定角色menu', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (35, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/menu/addMenuAuthority', '增加menu和角色关联关系', '菜单', 'POST');
INSERT INTO `sys_apis` VALUES (36, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/findFile', '寻找目标文件（秒传）', '分片上传', 'GET');
INSERT INTO `sys_apis` VALUES (37, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/breakpointContinue', '断点续传', '分片上传', 'POST');
INSERT INTO `sys_apis` VALUES (38, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/breakpointContinueFinish', '断点续传完成', '分片上传', 'POST');
INSERT INTO `sys_apis` VALUES (39, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/removeChunk', '上传完成移除文件', '分片上传', 'POST');
INSERT INTO `sys_apis` VALUES (40, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/upload', '文件上传示例', '文件上传与下载', 'POST');
INSERT INTO `sys_apis` VALUES (41, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/deleteFile', '删除文件', '文件上传与下载', 'POST');
INSERT INTO `sys_apis` VALUES (42, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/editFileName', '文件名或者备注编辑', '文件上传与下载', 'POST');
INSERT INTO `sys_apis` VALUES (43, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/fileUploadAndDownload/getFileList', '获取上传文件列表', '文件上传与下载', 'POST');
INSERT INTO `sys_apis` VALUES (44, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/system/getServerInfo', '获取服务器信息', '系统服务', 'POST');
INSERT INTO `sys_apis` VALUES (45, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/system/getSystemConfig', '获取配置文件内容', '系统服务', 'POST');
INSERT INTO `sys_apis` VALUES (46, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/system/setSystemConfig', '设置配置文件内容', '系统服务', 'POST');
INSERT INTO `sys_apis` VALUES (47, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/customer/customer', '更新客户', '客户', 'PUT');
INSERT INTO `sys_apis` VALUES (48, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/customer/customer', '创建客户', '客户', 'POST');
INSERT INTO `sys_apis` VALUES (49, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/customer/customer', '删除客户', '客户', 'DELETE');
INSERT INTO `sys_apis` VALUES (50, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/customer/customer', '获取单一客户', '客户', 'GET');
INSERT INTO `sys_apis` VALUES (51, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/customer/customerList', '获取客户列表', '客户', 'GET');
INSERT INTO `sys_apis` VALUES (52, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/getDB', '获取所有数据库', '代码生成器', 'GET');
INSERT INTO `sys_apis` VALUES (53, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/getTables', '获取数据库表', '代码生成器', 'GET');
INSERT INTO `sys_apis` VALUES (54, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/createTemp', '自动化代码', '代码生成器', 'POST');
INSERT INTO `sys_apis` VALUES (55, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/preview', '预览自动化代码', '代码生成器', 'POST');
INSERT INTO `sys_apis` VALUES (56, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/getColumn', '获取所选table的所有字段', '代码生成器', 'GET');
INSERT INTO `sys_apis` VALUES (57, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/createPlug', '自动创建插件包', '代码生成器', 'POST');
INSERT INTO `sys_apis` VALUES (58, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/installPlugin', '安装插件', '代码生成器', 'POST');
INSERT INTO `sys_apis` VALUES (59, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/pubPlug', '打包插件', '代码生成器', 'POST');
INSERT INTO `sys_apis` VALUES (60, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/createPackage', '生成包(package)', '包（pkg）生成器', 'POST');
INSERT INTO `sys_apis` VALUES (61, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/getPackage', '获取所有包(package)', '包（pkg）生成器', 'POST');
INSERT INTO `sys_apis` VALUES (62, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/delPackage', '删除包(package)', '包（pkg）生成器', 'POST');
INSERT INTO `sys_apis` VALUES (63, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/getMeta', '获取meta信息', '代码生成器历史', 'POST');
INSERT INTO `sys_apis` VALUES (64, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/rollback', '回滚自动生成代码', '代码生成器历史', 'POST');
INSERT INTO `sys_apis` VALUES (65, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/getSysHistory', '查询回滚记录', '代码生成器历史', 'POST');
INSERT INTO `sys_apis` VALUES (66, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/autoCode/delSysHistory', '删除回滚记录', '代码生成器历史', 'POST');
INSERT INTO `sys_apis` VALUES (67, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionaryDetail/updateSysDictionaryDetail', '更新字典内容', '系统字典详情', 'PUT');
INSERT INTO `sys_apis` VALUES (68, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionaryDetail/createSysDictionaryDetail', '新增字典内容', '系统字典详情', 'POST');
INSERT INTO `sys_apis` VALUES (69, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionaryDetail/deleteSysDictionaryDetail', '删除字典内容', '系统字典详情', 'DELETE');
INSERT INTO `sys_apis` VALUES (70, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionaryDetail/findSysDictionaryDetail', '根据ID获取字典内容', '系统字典详情', 'GET');
INSERT INTO `sys_apis` VALUES (71, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionaryDetail/getSysDictionaryDetailList', '获取字典内容列表', '系统字典详情', 'GET');
INSERT INTO `sys_apis` VALUES (72, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionary/createSysDictionary', '新增字典', '系统字典', 'POST');
INSERT INTO `sys_apis` VALUES (73, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionary/deleteSysDictionary', '删除字典', '系统字典', 'DELETE');
INSERT INTO `sys_apis` VALUES (74, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionary/updateSysDictionary', '更新字典', '系统字典', 'PUT');
INSERT INTO `sys_apis` VALUES (75, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionary/findSysDictionary', '根据ID获取字典', '系统字典', 'GET');
INSERT INTO `sys_apis` VALUES (76, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysDictionary/getSysDictionaryList', '获取字典列表', '系统字典', 'GET');
INSERT INTO `sys_apis` VALUES (77, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysOperationRecord/createSysOperationRecord', '新增操作记录', '操作记录', 'POST');
INSERT INTO `sys_apis` VALUES (78, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysOperationRecord/findSysOperationRecord', '根据ID获取操作记录', '操作记录', 'GET');
INSERT INTO `sys_apis` VALUES (79, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysOperationRecord/getSysOperationRecordList', '获取操作记录列表', '操作记录', 'GET');
INSERT INTO `sys_apis` VALUES (80, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysOperationRecord/deleteSysOperationRecord', '删除操作记录', '操作记录', 'DELETE');
INSERT INTO `sys_apis` VALUES (81, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/sysOperationRecord/deleteSysOperationRecordByIds', '批量删除操作历史', '操作记录', 'DELETE');
INSERT INTO `sys_apis` VALUES (82, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/simpleUploader/upload', '插件版分片上传', '断点续传(插件版)', 'POST');
INSERT INTO `sys_apis` VALUES (83, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/simpleUploader/checkFileMd5', '文件完整度验证', '断点续传(插件版)', 'GET');
INSERT INTO `sys_apis` VALUES (84, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/simpleUploader/mergeFileMd5', '上传完成合并文件', '断点续传(插件版)', 'GET');
INSERT INTO `sys_apis` VALUES (85, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/email/emailTest', '发送测试邮件', 'email', 'POST');
INSERT INTO `sys_apis` VALUES (86, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/email/emailSend', '发送邮件示例', 'email', 'POST');
INSERT INTO `sys_apis` VALUES (87, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authorityBtn/setAuthorityBtn', '设置按钮权限', '按钮权限', 'POST');
INSERT INTO `sys_apis` VALUES (88, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authorityBtn/getAuthorityBtn', '获取已有按钮权限', '按钮权限', 'POST');
INSERT INTO `sys_apis` VALUES (89, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/authorityBtn/canRemoveAuthorityBtn', '删除按钮', '按钮权限', 'POST');
INSERT INTO `sys_apis` VALUES (90, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/chatGpt/getTable', '通过gpt获取内容', '万用表格', 'POST');
INSERT INTO `sys_apis` VALUES (91, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/chatGpt/createSK', '录入sk', '万用表格', 'POST');
INSERT INTO `sys_apis` VALUES (92, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/chatGpt/getSK', '获取sk', '万用表格', 'GET');
INSERT INTO `sys_apis` VALUES (93, '2023-07-09 23:26:34.459', '2023-07-09 23:26:34.459', NULL, '/chatGpt/deleteSK', '删除sk', '万用表格', 'DELETE');
INSERT INTO `sys_apis` VALUES (94, '2023-07-09 23:45:46.297', '2023-07-09 23:45:46.297', NULL, '/pdMock/createPdMock', '新增原型', 'pdMock', 'POST');
INSERT INTO `sys_apis` VALUES (95, '2023-07-09 23:45:46.299', '2023-07-09 23:45:46.299', NULL, '/pdMock/deletePdMock', '删除原型', 'pdMock', 'DELETE');
INSERT INTO `sys_apis` VALUES (96, '2023-07-09 23:45:46.299', '2023-07-09 23:45:46.299', NULL, '/pdMock/deletePdMockByIds', '批量删除原型', 'pdMock', 'DELETE');
INSERT INTO `sys_apis` VALUES (97, '2023-07-09 23:45:46.300', '2023-07-09 23:45:46.300', NULL, '/pdMock/updatePdMock', '更新原型', 'pdMock', 'PUT');
INSERT INTO `sys_apis` VALUES (98, '2023-07-09 23:45:46.301', '2023-07-09 23:45:46.301', NULL, '/pdMock/findPdMock', '根据ID获取原型', 'pdMock', 'GET');
INSERT INTO `sys_apis` VALUES (99, '2023-07-09 23:45:46.301', '2023-07-09 23:45:46.301', NULL, '/pdMock/getPdMockList', '获取原型列表', 'pdMock', 'GET');
INSERT INTO `sys_apis` VALUES (100, '2023-07-10 00:04:53.588', '2023-07-10 00:04:53.588', NULL, '/pdRelease/createPdRelease', '新增产品发布', 'pdRelease', 'POST');
INSERT INTO `sys_apis` VALUES (101, '2023-07-10 00:04:53.589', '2023-07-10 00:04:53.589', NULL, '/pdRelease/deletePdRelease', '删除产品发布', 'pdRelease', 'DELETE');
INSERT INTO `sys_apis` VALUES (102, '2023-07-10 00:04:53.590', '2023-07-10 00:04:53.590', NULL, '/pdRelease/deletePdReleaseByIds', '批量删除产品发布', 'pdRelease', 'DELETE');
INSERT INTO `sys_apis` VALUES (103, '2023-07-10 00:04:53.590', '2023-07-10 00:04:53.590', NULL, '/pdRelease/updatePdRelease', '更新产品发布', 'pdRelease', 'PUT');
INSERT INTO `sys_apis` VALUES (104, '2023-07-10 00:04:53.591', '2023-07-10 00:04:53.591', NULL, '/pdRelease/findPdRelease', '根据ID获取产品发布', 'pdRelease', 'GET');
INSERT INTO `sys_apis` VALUES (105, '2023-07-10 00:04:53.591', '2023-07-10 00:04:53.591', NULL, '/pdRelease/getPdReleaseList', '获取产品发布列表', 'pdRelease', 'GET');
INSERT INTO `sys_apis` VALUES (106, '2023-08-12 22:11:11.435', '2023-08-12 22:11:11.435', NULL, '/user/getUser', '根据id获取用户信息', '系统用户', 'POST');

-- ----------------------------
-- Table structure for sys_authorities
-- ----------------------------
DROP TABLE IF EXISTS `sys_authorities`;
CREATE TABLE `sys_authorities`  (
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `authority_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `authority_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色名',
  `parent_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '父角色ID',
  `default_router` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'dashboard' COMMENT '默认菜单',
  PRIMARY KEY (`authority_id`) USING BTREE,
  UNIQUE INDEX `authority_id`(`authority_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9529 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_authorities
-- ----------------------------
INSERT INTO `sys_authorities` VALUES ('2023-07-09 23:26:34.489', '2023-07-13 18:41:42.180', NULL, 888, '管理角色', 0, 'dashboard');
INSERT INTO `sys_authorities` VALUES ('2023-07-09 23:26:34.489', '2023-07-26 12:06:42.317', NULL, 9528, '产品经理', 0, 'dashboard');

-- ----------------------------
-- Table structure for sys_authority_btns
-- ----------------------------
DROP TABLE IF EXISTS `sys_authority_btns`;
CREATE TABLE `sys_authority_btns`  (
  `authority_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '角色ID',
  `sys_menu_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '菜单ID',
  `sys_base_menu_btn_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '菜单按钮ID'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_authority_btns
-- ----------------------------

-- ----------------------------
-- Table structure for sys_authority_menus
-- ----------------------------
DROP TABLE IF EXISTS `sys_authority_menus`;
CREATE TABLE `sys_authority_menus`  (
  `sys_base_menu_id` bigint(20) UNSIGNED NOT NULL,
  `sys_authority_authority_id` bigint(20) UNSIGNED NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`sys_base_menu_id`, `sys_authority_authority_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_authority_menus
-- ----------------------------
INSERT INTO `sys_authority_menus` VALUES (1, 888);
INSERT INTO `sys_authority_menus` VALUES (1, 9528);
INSERT INTO `sys_authority_menus` VALUES (2, 888);
INSERT INTO `sys_authority_menus` VALUES (2, 9528);
INSERT INTO `sys_authority_menus` VALUES (3, 888);
INSERT INTO `sys_authority_menus` VALUES (4, 888);
INSERT INTO `sys_authority_menus` VALUES (5, 888);
INSERT INTO `sys_authority_menus` VALUES (6, 888);
INSERT INTO `sys_authority_menus` VALUES (7, 888);
INSERT INTO `sys_authority_menus` VALUES (8, 888);
INSERT INTO `sys_authority_menus` VALUES (9, 888);
INSERT INTO `sys_authority_menus` VALUES (10, 888);
INSERT INTO `sys_authority_menus` VALUES (11, 888);
INSERT INTO `sys_authority_menus` VALUES (16, 888);
INSERT INTO `sys_authority_menus` VALUES (19, 888);
INSERT INTO `sys_authority_menus` VALUES (24, 888);
INSERT INTO `sys_authority_menus` VALUES (32, 888);
INSERT INTO `sys_authority_menus` VALUES (32, 9528);
INSERT INTO `sys_authority_menus` VALUES (33, 888);
INSERT INTO `sys_authority_menus` VALUES (33, 9528);
INSERT INTO `sys_authority_menus` VALUES (35, 888);
INSERT INTO `sys_authority_menus` VALUES (35, 9528);

-- ----------------------------
-- Table structure for sys_auto_code_histories
-- ----------------------------
DROP TABLE IF EXISTS `sys_auto_code_histories`;
CREATE TABLE `sys_auto_code_histories`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `package` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `business_db` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `table_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `request_meta` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `auto_code_path` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `injection_meta` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `struct_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `struct_cn_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `api_ids` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `flag` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_auto_code_histories_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_auto_code_histories
-- ----------------------------
INSERT INTO `sys_auto_code_histories` VALUES (1, '2023-07-09 23:45:46.708', '2023-07-09 23:45:46.708', NULL, 'mock', '', 'pd_Mock', '{\"structName\":\"PdMock\",\"tableName\":\"pd_Mock\",\"packageName\":\"pdMock\",\"humpPackageName\":\"pd_mock\",\"abbreviation\":\"pdMock\",\"description\":\"原型\",\"autoCreateApiToSql\":true,\"autoCreateResource\":false,\"autoMoveFile\":true,\"businessDB\":\"\",\"fields\":[{\"fieldName\":\"Title\",\"fieldDesc\":\"名称\",\"fieldType\":\"string\",\"fieldJson\":\"title\",\"dataTypeLong\":\"\",\"comment\":\"\",\"columnName\":\"title\",\"fieldSearchType\":\"LIKE\",\"dictType\":\"\",\"require\":true,\"errorText\":\"\",\"clearable\":true,\"sort\":false}],\"HasTimer\":false,\"package\":\"mock\"}', 'D:\\codespace\\code\\gin-vue\\server\\api\\v1\\mock\\pd_mock.go;D:\\codespace\\code\\gin-vue\\server\\model\\mock\\pd_mock.go;D:\\codespace\\code\\gin-vue\\server\\model\\mock\\request\\pd_mock.go;D:\\codespace\\code\\gin-vue\\server\\router\\mock\\pd_mock.go;D:\\codespace\\code\\gin-vue\\server\\service\\mock\\pd_mock.go;D:\\codespace\\code\\gin-vue\\web\\src\\api\\pdMock.js;D:\\codespace\\code\\gin-vue\\web\\src\\view\\pdMock\\pdMockForm.vue;D:\\codespace\\code\\gin-vue\\web\\src\\view\\pdMock\\pdMock.vue;', 'D:\\codespace\\code\\gin-vue\\server\\api\\v1\\mock\\enter.go@ApiGroup@PdMockApi;D:\\codespace\\code\\gin-vue\\server\\router\\mock\\enter.go@RouterGroup@PdMockRouter;D:\\codespace\\code\\gin-vue\\server\\service\\mock\\enter.go@ServiceGroup@PdMockService;', 'PdMock', '原型', '94;95;96;97;98;99;', 0);
INSERT INTO `sys_auto_code_histories` VALUES (2, '2023-07-10 00:04:54.068', '2023-07-10 00:04:54.068', NULL, 'mock', '', 'pd_Release', '{\"structName\":\"PdRelease\",\"tableName\":\"pd_Release\",\"packageName\":\"pdRelease\",\"humpPackageName\":\"pd_release\",\"abbreviation\":\"pdRelease\",\"description\":\"产品发布\",\"autoCreateApiToSql\":true,\"autoCreateResource\":true,\"autoMoveFile\":true,\"businessDB\":\"\",\"fields\":[{\"fieldName\":\"MockupId\",\"fieldDesc\":\"产品ID\",\"fieldType\":\"int\",\"fieldJson\":\"mockupId\",\"dataTypeLong\":\"\",\"comment\":\"关联原型id\",\"columnName\":\"mockup_id\",\"fieldSearchType\":\"\",\"dictType\":\"\",\"require\":true,\"errorText\":\"\",\"clearable\":true,\"sort\":false},{\"fieldName\":\"ReleaseNote\",\"fieldDesc\":\"发布说明\",\"fieldType\":\"string\",\"fieldJson\":\"releaseNote\",\"dataTypeLong\":\"\",\"comment\":\"发布说明\",\"columnName\":\"release_note\",\"fieldSearchType\":\"\",\"dictType\":\"\",\"require\":false,\"errorText\":\"\",\"clearable\":true,\"sort\":false},{\"fieldName\":\"MockupFile\",\"fieldDesc\":\"原型文件\",\"fieldType\":\"file\",\"fieldJson\":\"mockupFile\",\"dataTypeLong\":\"\",\"comment\":\"原型文件\",\"columnName\":\"mockup_file\",\"fieldSearchType\":\"\",\"dictType\":\"\",\"require\":true,\"errorText\":\"\",\"clearable\":true,\"sort\":false},{\"fieldName\":\"Mockup_html\",\"fieldDesc\":\"原型访问链接\",\"fieldType\":\"string\",\"fieldJson\":\"mockup_html\",\"dataTypeLong\":\"\",\"comment\":\"原型访问链接\",\"columnName\":\"mockup_html\",\"fieldSearchType\":\"\",\"dictType\":\"\",\"require\":false,\"errorText\":\"\",\"clearable\":true,\"sort\":false}],\"HasTimer\":false,\"package\":\"mock\"}', 'D:\\codespace\\code\\gin-vue\\server\\api\\v1\\mock\\pd_release.go;D:\\codespace\\code\\gin-vue\\server\\model\\mock\\pd_release.go;D:\\codespace\\code\\gin-vue\\server\\model\\mock\\request\\pd_release.go;D:\\codespace\\code\\gin-vue\\server\\router\\mock\\pd_release.go;D:\\codespace\\code\\gin-vue\\server\\service\\mock\\pd_release.go;D:\\codespace\\code\\gin-vue\\web\\src\\api\\pdRelease.js;D:\\codespace\\code\\gin-vue\\web\\src\\view\\pdRelease\\pdReleaseForm.vue;D:\\codespace\\code\\gin-vue\\web\\src\\view\\pdRelease\\pdRelease.vue;', 'D:\\codespace\\code\\gin-vue\\server\\api\\v1\\mock\\enter.go@ApiGroup@PdReleaseApi;D:\\codespace\\code\\gin-vue\\server\\router\\mock\\enter.go@RouterGroup@PdReleaseRouter;D:\\codespace\\code\\gin-vue\\server\\service\\mock\\enter.go@ServiceGroup@PdReleaseService;', 'PdRelease', '产品发布', '100;101;102;103;104;105;', 0);

-- ----------------------------
-- Table structure for sys_auto_codes
-- ----------------------------
DROP TABLE IF EXISTS `sys_auto_codes`;
CREATE TABLE `sys_auto_codes`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `package_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '包名',
  `label` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '展示名',
  `desc` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_auto_codes_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_auto_codes
-- ----------------------------
INSERT INTO `sys_auto_codes` VALUES (1, '2023-07-09 23:32:27.054', '2023-07-09 23:32:27.054', NULL, 'mock', '原型管理', '原型管理');

-- ----------------------------
-- Table structure for sys_base_menu_btns
-- ----------------------------
DROP TABLE IF EXISTS `sys_base_menu_btns`;
CREATE TABLE `sys_base_menu_btns`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '按钮关键key',
  `desc` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sys_base_menu_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '菜单ID',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_base_menu_btns_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_base_menu_btns
-- ----------------------------

-- ----------------------------
-- Table structure for sys_base_menu_parameters
-- ----------------------------
DROP TABLE IF EXISTS `sys_base_menu_parameters`;
CREATE TABLE `sys_base_menu_parameters`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `sys_base_menu_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `type` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址栏携带参数为params还是query',
  `key` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址栏携带参数的key',
  `value` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址栏携带参数的值',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_base_menu_parameters_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_base_menu_parameters
-- ----------------------------

-- ----------------------------
-- Table structure for sys_base_menus
-- ----------------------------
DROP TABLE IF EXISTS `sys_base_menus`;
CREATE TABLE `sys_base_menus`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `menu_level` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `parent_id` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '父菜单ID',
  `path` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '路由path',
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '路由name',
  `hidden` tinyint(1) NULL DEFAULT NULL COMMENT '是否在列表隐藏',
  `component` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '对应前端文件路径',
  `sort` bigint(20) NULL DEFAULT NULL COMMENT '排序标记',
  `active_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '附加属性',
  `keep_alive` tinyint(1) NULL DEFAULT NULL COMMENT '附加属性',
  `default_menu` tinyint(1) NULL DEFAULT NULL COMMENT '附加属性',
  `title` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '附加属性',
  `icon` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '附加属性',
  `close_tab` tinyint(1) NULL DEFAULT NULL COMMENT '附加属性',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_base_menus_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_base_menus
-- ----------------------------
INSERT INTO `sys_base_menus` VALUES (1, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '0', 'dashboard', 'dashboard', 0, 'view/dashboard/index.vue', 1, '', 0, 0, '仪表盘', 'odometer', 0);
INSERT INTO `sys_base_menus` VALUES (2, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '0', 'about', 'about', 0, 'view/about/index.vue', 9, '', 0, 0, '关于我们', 'info-filled', 0);
INSERT INTO `sys_base_menus` VALUES (3, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '0', 'admin', 'superAdmin', 0, 'view/superAdmin/index.vue', 3, '', 0, 0, '超级管理员', 'user', 0);
INSERT INTO `sys_base_menus` VALUES (4, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '3', 'authority', 'authority', 0, 'view/superAdmin/authority/authority.vue', 1, '', 0, 0, '角色管理', 'avatar', 0);
INSERT INTO `sys_base_menus` VALUES (5, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '3', 'menu', 'menu', 0, 'view/superAdmin/menu/menu.vue', 2, '', 1, 0, '菜单管理', 'tickets', 0);
INSERT INTO `sys_base_menus` VALUES (6, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '3', 'api', 'api', 0, 'view/superAdmin/api/api.vue', 3, '', 1, 0, 'api管理', 'platform', 0);
INSERT INTO `sys_base_menus` VALUES (7, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '3', 'user', 'user', 0, 'view/superAdmin/user/user.vue', 4, '', 0, 0, '用户管理', 'coordinate', 0);
INSERT INTO `sys_base_menus` VALUES (8, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '3', 'dictionary', 'dictionary', 0, 'view/superAdmin/dictionary/sysDictionary.vue', 5, '', 0, 0, '字典管理', 'notebook', 0);
INSERT INTO `sys_base_menus` VALUES (9, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '3', 'dictionaryDetail/:id', 'dictionaryDetail', 1, 'view/superAdmin/dictionary/sysDictionaryDetail.vue', 1, 'dictionary', 0, 0, '字典详情-${id}', 'list', 0);
INSERT INTO `sys_base_menus` VALUES (10, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '3', 'operation', 'operation', 0, 'view/superAdmin/operation/sysOperationRecord.vue', 6, '', 0, 0, '操作历史', 'pie-chart', 0);
INSERT INTO `sys_base_menus` VALUES (11, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '0', 'person', 'person', 1, 'view/person/person.vue', 4, '', 0, 0, '个人信息', 'message', 0);
INSERT INTO `sys_base_menus` VALUES (12, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:45:23.929', 0, '0', 'example', 'example', 0, 'view/example/index.vue', 7, '', 0, 0, '示例文件', 'management', 0);
INSERT INTO `sys_base_menus` VALUES (13, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:45:12.520', 0, '12', 'upload', 'upload', 0, 'view/example/upload/upload.vue', 5, '', 0, 0, '媒体库（上传下载）', 'upload', 0);
INSERT INTO `sys_base_menus` VALUES (14, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:45:14.815', 0, '12', 'breakpoint', 'breakpoint', 0, 'view/example/breakpoint/breakpoint.vue', 6, '', 0, 0, '断点续传', 'upload-filled', 0);
INSERT INTO `sys_base_menus` VALUES (15, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:45:21.676', 0, '12', 'customer', 'customer', 0, 'view/example/customer/customer.vue', 7, '', 0, 0, '客户列表（资源示例）', 'avatar', 0);
INSERT INTO `sys_base_menus` VALUES (16, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '0', 'systemTools', 'systemTools', 0, 'view/systemTools/index.vue', 5, '', 0, 0, '系统工具', 'tools', 0);
INSERT INTO `sys_base_menus` VALUES (17, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:46:33.120', 0, '16', 'autoCode', 'autoCode', 0, 'view/systemTools/autoCode/index.vue', 1, '', 1, 0, '代码生成器', 'cpu', 0);
INSERT INTO `sys_base_menus` VALUES (18, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:46:42.028', 0, '16', 'formCreate', 'formCreate', 0, 'view/systemTools/formCreate/index.vue', 2, '', 1, 0, '表单生成器', 'magic-stick', 0);
INSERT INTO `sys_base_menus` VALUES (19, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '16', 'system', 'system', 0, 'view/systemTools/system/system.vue', 3, '', 0, 0, '系统配置', 'operation', 0);
INSERT INTO `sys_base_menus` VALUES (20, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:46:39.035', 0, '16', 'autoCodeAdmin', 'autoCodeAdmin', 0, 'view/systemTools/autoCodeAdmin/index.vue', 1, '', 0, 0, '自动化代码管理', 'magic-stick', 0);
INSERT INTO `sys_base_menus` VALUES (21, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:46:30.606', 0, '16', 'autoCodeEdit/:id', 'autoCodeEdit', 1, 'view/systemTools/autoCode/index.vue', 0, '', 0, 0, '自动化代码-${id}', 'magic-stick', 0);
INSERT INTO `sys_base_menus` VALUES (22, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:46:35.447', 0, '16', 'autoPkg', 'autoPkg', 0, 'view/systemTools/autoPkg/autoPkg.vue', 0, '', 0, 0, '自动化package', 'folder', 0);
INSERT INTO `sys_base_menus` VALUES (23, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-09 23:31:35.605', 0, '0', 'https://www.gin-vue-admin.com', 'https://www.gin-vue-admin.com', 0, '/', 0, '', 0, 0, '官方网站', 'home-filled', 0);
INSERT INTO `sys_base_menus` VALUES (24, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', NULL, 0, '0', 'state', 'state', 0, 'view/system/state.vue', 8, '', 0, 0, '服务器状态', 'cloudy', 0);
INSERT INTO `sys_base_menus` VALUES (25, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:45:06.510', 0, '0', 'plugin', 'plugin', 0, 'view/routerHolder.vue', 6, '', 0, 0, '插件系统', 'cherry', 0);
INSERT INTO `sys_base_menus` VALUES (26, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:44:52.160', 0, '25', 'https://plugin.gin-vue-admin.com/', 'https://plugin.gin-vue-admin.com/', 0, 'https://plugin.gin-vue-admin.com/', 0, '', 0, 0, '插件市场', 'shop', 0);
INSERT INTO `sys_base_menus` VALUES (27, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:44:55.225', 0, '25', 'installPlugin', 'installPlugin', 0, 'view/systemTools/installPlugin/index.vue', 1, '', 0, 0, '插件安装', 'box', 0);
INSERT INTO `sys_base_menus` VALUES (28, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:44:58.089', 0, '25', 'autoPlug', 'autoPlug', 0, 'view/systemTools/autoPlug/autoPlug.vue', 2, '', 0, 0, '插件模板', 'folder', 0);
INSERT INTO `sys_base_menus` VALUES (29, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:45:00.396', 0, '25', 'pubPlug', 'pubPlug', 0, 'view/systemTools/pubPlug/pubPlug.vue', 3, '', 0, 0, '打包插件', 'files', 0);
INSERT INTO `sys_base_menus` VALUES (30, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:45:02.495', 0, '25', 'plugin-email', 'plugin-email', 0, 'plugin/email/view/index.vue', 4, '', 0, 0, '邮件插件', 'message', 0);
INSERT INTO `sys_base_menus` VALUES (31, '2023-07-09 23:26:34.643', '2023-07-09 23:26:34.643', '2023-07-13 18:46:45.241', 0, '16', 'chatTable', 'chatTable', 0, 'view/chatgpt/chatTable.vue', 6, '', 0, 0, '万用表格', 'chat-dot-square', 0);
INSERT INTO `sys_base_menus` VALUES (32, '2023-07-09 23:46:24.987', '2023-07-09 23:46:24.987', NULL, 0, '0', 'mock', 'mock', 0, 'view/routerHolder.vue', 0, '', 0, 0, '原型管理', 'aim', 0);
INSERT INTO `sys_base_menus` VALUES (33, '2023-07-09 23:47:50.759', '2023-07-09 23:47:50.759', NULL, 0, '32', 'mocklist', 'mocklist', 0, 'view/pdMock/pdMock.vue', 0, '', 0, 0, '原型管理', 'aim', 0);
INSERT INTO `sys_base_menus` VALUES (34, '2023-07-10 00:06:00.491', '2023-07-10 00:06:00.491', '2023-07-10 11:58:59.022', 0, '32', 'mockupDetail', 'mockupDetail', 0, 'view/pdRelease/pdRelease.vue', 0, '', 0, 0, '发布管理', 'aim', 0);
INSERT INTO `sys_base_menus` VALUES (35, '2023-07-10 11:57:51.083', '2023-07-12 18:03:33.702', NULL, 0, '32', 'release/:id', 'release', 1, 'view/pdRelease/pdRelease.vue', 0, '', 0, 0, '发布列表', 'alarm-clock', 0);

-- ----------------------------
-- Table structure for sys_casbin_rule
-- ----------------------------
DROP TABLE IF EXISTS `sys_casbin_rule`;
CREATE TABLE `sys_casbin_rule`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ptype` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v0` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v1` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v2` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v3` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v4` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v5` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v6` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `v7` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `idx_sys_casbin_rule`(`ptype` ASC, `v0` ASC, `v1` ASC, `v2` ASC, `v3` ASC, `v4` ASC, `v5` ASC, `v6` ASC, `v7` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_casbin_rule
-- ----------------------------

-- ----------------------------
-- Table structure for sys_chat_gpt_options
-- ----------------------------
DROP TABLE IF EXISTS `sys_chat_gpt_options`;
CREATE TABLE `sys_chat_gpt_options`  (
  `sk` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_chat_gpt_options
-- ----------------------------

-- ----------------------------
-- Table structure for sys_columns
-- ----------------------------
DROP TABLE IF EXISTS `sys_columns`;
CREATE TABLE `sys_columns`  (
  `column_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `table_id` bigint(20) NULL DEFAULT NULL,
  `column_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `column_comment` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `column_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `go_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `go_field` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `json_field` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_pk` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_increment` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_required` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_insert` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_edit` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_list` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_query` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `query_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `html_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dict_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sort` bigint(20) NULL DEFAULT NULL,
  `list` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pk` tinyint(1) NULL DEFAULT NULL,
  `required` tinyint(1) NULL DEFAULT NULL,
  `super_column` tinyint(1) NULL DEFAULT NULL,
  `usable_column` tinyint(1) NULL DEFAULT NULL,
  `increment` tinyint(1) NULL DEFAULT NULL,
  `insert` tinyint(1) NULL DEFAULT NULL,
  `edit` tinyint(1) NULL DEFAULT NULL,
  `query` tinyint(1) NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `fk_table_name` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_table_name_class` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_table_name_package` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_label_id` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_label_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`column_id`) USING BTREE,
  INDEX `idx_sys_columns_deleted_at`(`deleted_at` ASC) USING BTREE,
  INDEX `idx_sys_columns_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_columns_update_by`(`update_by` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_columns
-- ----------------------------

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键编码',
  `config_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'ConfigName',
  `config_key` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'ConfigKey',
  `config_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'ConfigValue',
  `config_type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'ConfigType',
  `is_frontend` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '是否前台',
  `remark` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Remark',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_config_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_config_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_sys_config_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES (1, '皮肤样式', 'sys_index_skinName', 'skin-green', 'Y', '0', '主框架页-默认皮肤样式名称:蓝色 skin-blue、绿色 skin-green、紫色 skin-purple、红色 skin-red、黄色 skin-yellow', 1, 1, '2021-05-13 19:56:37.913', '2021-06-05 13:50:13.123', NULL);
INSERT INTO `sys_config` VALUES (2, '初始密码', 'sys_user_initPassword', '123456', 'Y', '0', '用户管理-账号初始密码:123456', 1, 1, '2021-05-13 19:56:37.913', '2021-05-13 19:56:37.913', NULL);
INSERT INTO `sys_config` VALUES (3, '侧栏主题', 'sys_index_sideTheme', 'theme-dark', 'Y', '0', '主框架页-侧边栏主题:深色主题theme-dark，浅色主题theme-light', 1, 1, '2021-05-13 19:56:37.913', '2021-05-13 19:56:37.913', NULL);
INSERT INTO `sys_config` VALUES (4, '系统名称', 'sys_app_name', 'go-admin管理系统', 'Y', '1', '', 1, 0, '2021-03-17 08:52:06.067', '2021-05-28 10:08:25.248', NULL);
INSERT INTO `sys_config` VALUES (5, '系统logo', 'sys_app_logo', 'https://doc-image.zhangwj.com/img/go-admin.png', 'Y', '1', '', 1, 0, '2021-03-17 08:53:19.462', '2021-03-17 08:53:19.462', NULL);

-- ----------------------------
-- Table structure for sys_data_authority_id
-- ----------------------------
DROP TABLE IF EXISTS `sys_data_authority_id`;
CREATE TABLE `sys_data_authority_id`  (
  `sys_authority_authority_id` bigint(20) UNSIGNED NOT NULL COMMENT '角色ID',
  `data_authority_id_authority_id` bigint(20) UNSIGNED NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`sys_authority_authority_id`, `data_authority_id_authority_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_data_authority_id
-- ----------------------------
INSERT INTO `sys_data_authority_id` VALUES (888, 888);
INSERT INTO `sys_data_authority_id` VALUES (888, 8881);
INSERT INTO `sys_data_authority_id` VALUES (888, 9528);
INSERT INTO `sys_data_authority_id` VALUES (9528, 8881);
INSERT INTO `sys_data_authority_id` VALUES (9528, 9528);

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `dept_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) NULL DEFAULT NULL,
  `dept_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dept_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sort` tinyint(4) NULL DEFAULT NULL,
  `leader` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` tinyint(4) NULL DEFAULT NULL,
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`dept_id`) USING BTREE,
  INDEX `idx_sys_dept_deleted_at`(`deleted_at` ASC) USING BTREE,
  INDEX `idx_sys_dept_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_dept_update_by`(`update_by` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (1, 0, '/0/1/', '爱拓科技', 0, 'aituo', '13782218188', 'atuo@aituo.com', 2, 1, 1, '2021-05-13 19:56:37.913', '2021-06-05 17:06:44.960', NULL);
INSERT INTO `sys_dept` VALUES (7, 1, '/0/1/7/', '研发部', 1, 'aituo', '13782218188', 'atuo@aituo.com', 2, 1, 1, '2021-05-13 19:56:37.913', '2021-06-16 21:35:00.109', NULL);
INSERT INTO `sys_dept` VALUES (8, 1, '/0/1/8/', '运维部', 0, 'aituo', '13782218188', 'atuo@aituo.com', 2, 1, 1, '2021-05-13 19:56:37.913', '2021-06-16 21:41:39.747', NULL);
INSERT INTO `sys_dept` VALUES (9, 1, '/0/1/9/', '客服部', 0, 'aituo', '13782218188', 'atuo@aituo.com', 2, 1, 1, '2021-05-13 19:56:37.913', '2021-06-05 17:07:05.993', NULL);
INSERT INTO `sys_dept` VALUES (10, 1, '/0/1/10/', '人力资源', 3, 'aituo', '13782218188', 'atuo@aituo.com', 1, 1, 1, '2021-05-13 19:56:37.913', '2021-06-05 17:07:08.503', NULL);

-- ----------------------------
-- Table structure for sys_dict_data
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_data`;
CREATE TABLE `sys_dict_data`  (
  `dict_code` bigint(20) NOT NULL AUTO_INCREMENT,
  `dict_sort` bigint(20) NULL DEFAULT NULL,
  `dict_label` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dict_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dict_type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `css_class` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `list_class` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_default` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` tinyint(4) NULL DEFAULT NULL,
  `default` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`dict_code`) USING BTREE,
  INDEX `idx_sys_dict_data_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_dict_data_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_sys_dict_data_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dict_data
-- ----------------------------
INSERT INTO `sys_dict_data` VALUES (1, 0, '正常', '2', 'sys_normal_disable', '', '', '', 2, '', '系统正常', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:40.168', NULL);
INSERT INTO `sys_dict_data` VALUES (2, 0, '停用', '1', 'sys_normal_disable', '', '', '', 2, '', '系统停用', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (3, 0, '男', '0', 'sys_user_sex', '', '', '', 2, '', '性别男', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (4, 0, '女', '1', 'sys_user_sex', '', '', '', 2, '', '性别女', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (5, 0, '未知', '2', 'sys_user_sex', '', '', '', 2, '', '性别未知', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (6, 0, '显示', '0', 'sys_show_hide', '', '', '', 2, '', '显示菜单', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (7, 0, '隐藏', '1', 'sys_show_hide', '', '', '', 2, '', '隐藏菜单', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (8, 0, '是', 'Y', 'sys_yes_no', '', '', '', 2, '', '系统默认是', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (9, 0, '否', 'N', 'sys_yes_no', '', '', '', 2, '', '系统默认否', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (10, 0, '正常', '2', 'sys_job_status', '', '', '', 2, '', '正常状态', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (11, 0, '停用', '1', 'sys_job_status', '', '', '', 2, '', '停用状态', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (12, 0, '默认', 'DEFAULT', 'sys_job_group', '', '', '', 2, '', '默认分组', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (13, 0, '系统', 'SYSTEM', 'sys_job_group', '', '', '', 2, '', '系统分组', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (14, 0, '通知', '1', 'sys_notice_type', '', '', '', 2, '', '通知', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (15, 0, '公告', '2', 'sys_notice_type', '', '', '', 2, '', '公告', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (16, 0, '正常', '2', 'sys_common_status', '', '', '', 2, '', '正常状态', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (17, 0, '关闭', '1', 'sys_common_status', '', '', '', 2, '', '关闭状态', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (18, 0, '新增', '1', 'sys_oper_type', '', '', '', 2, '', '新增操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (19, 0, '修改', '2', 'sys_oper_type', '', '', '', 2, '', '修改操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (20, 0, '删除', '3', 'sys_oper_type', '', '', '', 2, '', '删除操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (21, 0, '授权', '4', 'sys_oper_type', '', '', '', 2, '', '授权操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (22, 0, '导出', '5', 'sys_oper_type', '', '', '', 2, '', '导出操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (23, 0, '导入', '6', 'sys_oper_type', '', '', '', 2, '', '导入操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (24, 0, '强退', '7', 'sys_oper_type', '', '', '', 2, '', '强退操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (25, 0, '生成代码', '8', 'sys_oper_type', '', '', '', 2, '', '生成操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (26, 0, '清空数据', '9', 'sys_oper_type', '', '', '', 2, '', '清空操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (27, 0, '成功', '0', 'sys_notice_status', '', '', '', 2, '', '成功状态', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (28, 0, '失败', '1', 'sys_notice_status', '', '', '', 2, '', '失败状态', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (29, 0, '登录', '10', 'sys_oper_type', '', '', '', 2, '', '登录操作', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (30, 0, '退出', '11', 'sys_oper_type', '', '', '', 2, '', '', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (31, 0, '获取验证码', '12', 'sys_oper_type', '', '', '', 2, '', '获取验证码', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_data` VALUES (32, 0, '正常', '1', 'sys_content_status', '', '', '', 1, '', '', 1, 1, '2021-05-13 19:56:40.845', '2021-05-13 19:56:40.845', NULL);
INSERT INTO `sys_dict_data` VALUES (33, 1, '禁用', '2', 'sys_content_status', '', '', '', 1, '', '', 1, 1, '2021-05-13 19:56:40.845', '2021-05-13 19:56:40.845', NULL);

-- ----------------------------
-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_type`;
CREATE TABLE `sys_dict_type`  (
  `dict_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dict_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dict_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` tinyint(4) NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`dict_id`) USING BTREE,
  INDEX `idx_sys_dict_type_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_dict_type_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_sys_dict_type_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dict_type
-- ----------------------------
INSERT INTO `sys_dict_type` VALUES (1, '系统开关', 'sys_normal_disable', 2, '系统开关列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (2, '用户性别', 'sys_user_sex', 2, '用户性别列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (3, '菜单状态', 'sys_show_hide', 2, '菜单状态列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (4, '系统是否', 'sys_yes_no', 2, '系统是否列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (5, '任务状态', 'sys_job_status', 2, '任务状态列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (6, '任务分组', 'sys_job_group', 2, '任务分组列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (7, '通知类型', 'sys_notice_type', 2, '通知类型列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (8, '系统状态', 'sys_common_status', 2, '登录状态列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (9, '操作类型', 'sys_oper_type', 2, '操作类型列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (10, '通知状态', 'sys_notice_status', 2, '通知状态列表', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:37.914', NULL);
INSERT INTO `sys_dict_type` VALUES (11, '内容状态', 'sys_content_status', 2, '', 1, 1, '2021-05-13 19:56:40.813', '2021-05-13 19:56:40.813', NULL);

-- ----------------------------
-- Table structure for sys_dictionaries
-- ----------------------------
DROP TABLE IF EXISTS `sys_dictionaries`;
CREATE TABLE `sys_dictionaries`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '字典名（中）',
  `type` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '字典名（英）',
  `status` tinyint(1) NULL DEFAULT NULL COMMENT '状态',
  `desc` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_dictionaries_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dictionaries
-- ----------------------------
INSERT INTO `sys_dictionaries` VALUES (1, '2023-07-09 23:26:34.533', '2023-07-09 23:26:34.551', NULL, '性别', 'gender', 1, '性别字典');
INSERT INTO `sys_dictionaries` VALUES (2, '2023-07-09 23:26:34.533', '2023-07-09 23:26:34.564', NULL, '数据库int类型', 'int', 1, 'int类型对应的数据库类型');
INSERT INTO `sys_dictionaries` VALUES (3, '2023-07-09 23:26:34.533', '2023-07-09 23:26:34.580', NULL, '数据库时间日期类型', 'time.Time', 1, '数据库时间日期类型');
INSERT INTO `sys_dictionaries` VALUES (4, '2023-07-09 23:26:34.533', '2023-07-09 23:26:34.595', NULL, '数据库浮点型', 'float64', 1, '数据库浮点型');
INSERT INTO `sys_dictionaries` VALUES (5, '2023-07-09 23:26:34.533', '2023-07-09 23:26:34.610', NULL, '数据库字符串', 'string', 1, '数据库字符串');
INSERT INTO `sys_dictionaries` VALUES (6, '2023-07-09 23:26:34.533', '2023-07-09 23:26:34.626', NULL, '数据库bool类型', 'bool', 1, '数据库bool类型');

-- ----------------------------
-- Table structure for sys_dictionary_details
-- ----------------------------
DROP TABLE IF EXISTS `sys_dictionary_details`;
CREATE TABLE `sys_dictionary_details`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `label` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '展示值',
  `value` bigint(20) NULL DEFAULT NULL COMMENT '字典值',
  `status` tinyint(1) NULL DEFAULT NULL COMMENT '启用状态',
  `sort` bigint(20) NULL DEFAULT NULL COMMENT '排序标记',
  `sys_dictionary_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '关联标记',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_dictionary_details_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dictionary_details
-- ----------------------------
INSERT INTO `sys_dictionary_details` VALUES (1, '2023-07-09 23:26:34.551', '2023-07-09 23:26:34.551', NULL, '男', 1, 1, 1, 1);
INSERT INTO `sys_dictionary_details` VALUES (2, '2023-07-09 23:26:34.551', '2023-07-09 23:26:34.551', NULL, '女', 2, 1, 2, 1);
INSERT INTO `sys_dictionary_details` VALUES (3, '2023-07-09 23:26:34.565', '2023-07-09 23:26:34.565', NULL, 'smallint', 1, 1, 1, 2);
INSERT INTO `sys_dictionary_details` VALUES (4, '2023-07-09 23:26:34.565', '2023-07-09 23:26:34.565', NULL, 'mediumint', 2, 1, 2, 2);
INSERT INTO `sys_dictionary_details` VALUES (5, '2023-07-09 23:26:34.565', '2023-07-09 23:26:34.565', NULL, 'int', 3, 1, 3, 2);
INSERT INTO `sys_dictionary_details` VALUES (6, '2023-07-09 23:26:34.565', '2023-07-09 23:26:34.565', NULL, 'bigint', 4, 1, 4, 2);
INSERT INTO `sys_dictionary_details` VALUES (7, '2023-07-09 23:26:34.581', '2023-07-09 23:26:34.581', NULL, 'date', 0, 1, 0, 3);
INSERT INTO `sys_dictionary_details` VALUES (8, '2023-07-09 23:26:34.581', '2023-07-09 23:26:34.581', NULL, 'time', 1, 1, 1, 3);
INSERT INTO `sys_dictionary_details` VALUES (9, '2023-07-09 23:26:34.581', '2023-07-09 23:26:34.581', NULL, 'year', 2, 1, 2, 3);
INSERT INTO `sys_dictionary_details` VALUES (10, '2023-07-09 23:26:34.581', '2023-07-09 23:26:34.581', NULL, 'datetime', 3, 1, 3, 3);
INSERT INTO `sys_dictionary_details` VALUES (11, '2023-07-09 23:26:34.581', '2023-07-09 23:26:34.581', NULL, 'timestamp', 5, 1, 5, 3);
INSERT INTO `sys_dictionary_details` VALUES (12, '2023-07-09 23:26:34.595', '2023-07-09 23:26:34.595', NULL, 'float', 0, 1, 0, 4);
INSERT INTO `sys_dictionary_details` VALUES (13, '2023-07-09 23:26:34.595', '2023-07-09 23:26:34.595', NULL, 'double', 1, 1, 1, 4);
INSERT INTO `sys_dictionary_details` VALUES (14, '2023-07-09 23:26:34.595', '2023-07-09 23:26:34.595', NULL, 'decimal', 2, 1, 2, 4);
INSERT INTO `sys_dictionary_details` VALUES (15, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'char', 0, 1, 0, 5);
INSERT INTO `sys_dictionary_details` VALUES (16, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'varchar', 1, 1, 1, 5);
INSERT INTO `sys_dictionary_details` VALUES (17, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'tinyblob', 2, 1, 2, 5);
INSERT INTO `sys_dictionary_details` VALUES (18, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'tinytext', 3, 1, 3, 5);
INSERT INTO `sys_dictionary_details` VALUES (19, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'text', 4, 1, 4, 5);
INSERT INTO `sys_dictionary_details` VALUES (20, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'blob', 5, 1, 5, 5);
INSERT INTO `sys_dictionary_details` VALUES (21, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'mediumblob', 6, 1, 6, 5);
INSERT INTO `sys_dictionary_details` VALUES (22, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'mediumtext', 7, 1, 7, 5);
INSERT INTO `sys_dictionary_details` VALUES (23, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'longblob', 8, 1, 8, 5);
INSERT INTO `sys_dictionary_details` VALUES (24, '2023-07-09 23:26:34.611', '2023-07-09 23:26:34.611', NULL, 'longtext', 9, 1, 9, 5);
INSERT INTO `sys_dictionary_details` VALUES (25, '2023-07-09 23:26:34.627', '2023-07-09 23:26:34.627', NULL, 'tinyint', 0, 1, 0, 6);

-- ----------------------------
-- Table structure for sys_job
-- ----------------------------
DROP TABLE IF EXISTS `sys_job`;
CREATE TABLE `sys_job`  (
  `job_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `job_group` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `job_type` tinyint(4) NULL DEFAULT NULL,
  `cron_expression` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `invoke_target` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `args` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `misfire_policy` bigint(20) NULL DEFAULT NULL,
  `concurrent` tinyint(4) NULL DEFAULT NULL,
  `status` tinyint(4) NULL DEFAULT NULL,
  `entry_id` smallint(6) NULL DEFAULT NULL,
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`job_id`) USING BTREE,
  INDEX `idx_sys_job_deleted_at`(`deleted_at` ASC) USING BTREE,
  INDEX `idx_sys_job_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_job_update_by`(`update_by` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_job
-- ----------------------------
INSERT INTO `sys_job` VALUES (1, '接口测试', 'DEFAULT', 1, '0/5 * * * * ', 'http://localhost:8000', '', 1, 1, 1, 0, '2021-05-13 19:56:37.914', '2021-06-14 20:59:55.417', NULL, 1, 1);
INSERT INTO `sys_job` VALUES (2, '函数测试', 'DEFAULT', 2, '0/5 * * * * ', 'ExamplesOne', '参数', 1, 1, 1, 0, '2021-05-13 19:56:37.914', '2021-05-31 23:55:37.221', NULL, 1, 1);

-- ----------------------------
-- Table structure for sys_login_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_login_log`;
CREATE TABLE `sys_login_log`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键编码',
  `username` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户名',
  `status` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '状态',
  `ipaddr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'ip地址',
  `login_location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '归属地',
  `browser` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '浏览器',
  `os` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '系统',
  `platform` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '固件',
  `login_time` timestamp NULL DEFAULT NULL COMMENT '登录时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `msg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '信息',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_login_log_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_login_log_update_by`(`update_by` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_login_log
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `icon` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `path` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `paths` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_type` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `action` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `permission` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `parent_id` smallint(6) NULL DEFAULT NULL,
  `no_cache` tinyint(1) NULL DEFAULT NULL,
  `breadcrumb` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sort` tinyint(4) NULL DEFAULT NULL,
  `visible` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_frame` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`menu_id`) USING BTREE,
  INDEX `idx_sys_menu_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_menu_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_sys_menu_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 542 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (2, 'Admin', '系统管理', 'api-server', '/admin', '/0/2', 'M', '无', '', 0, 1, '', 'Layout', 10, '0', '1', 0, 1, '2021-05-20 21:58:45.679', '2023-07-09 21:24:45.117', NULL);
INSERT INTO `sys_menu` VALUES (3, 'SysUserManage', '用户管理', 'user', '/admin/sys-user', '/0/2/3', 'C', '无', 'admin:sysUser:list', 2, 0, '', '/admin/sys-user/index', 10, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.119', NULL);
INSERT INTO `sys_menu` VALUES (43, '', '新增管理员', 'app-group-fill', '', '/0/2/3/43', 'F', 'POST', 'admin:sysUser:add', 3, 0, '', '', 10, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.125', NULL);
INSERT INTO `sys_menu` VALUES (44, '', '查询管理员', 'app-group-fill', '', '/0/2/3/44', 'F', 'GET', 'admin:sysUser:query', 3, 0, '', '', 40, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.126', NULL);
INSERT INTO `sys_menu` VALUES (45, '', '修改管理员', 'app-group-fill', '', '/0/2/3/45', 'F', 'PUT', 'admin:sysUser:edit', 3, 0, '', '', 30, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.126', NULL);
INSERT INTO `sys_menu` VALUES (46, '', '删除管理员', 'app-group-fill', '', '/0/2/3/46', 'F', 'DELETE', 'admin:sysUser:remove', 3, 0, '', '', 20, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.127', NULL);
INSERT INTO `sys_menu` VALUES (51, 'SysMenuManage', '菜单管理', 'tree-table', '/admin/sys-menu', '/0/2/51', 'C', '无', 'admin:sysMenu:list', 2, 1, '', '/admin/sys-menu/index', 30, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.119', NULL);
INSERT INTO `sys_menu` VALUES (52, 'SysRoleManage', '角色管理', 'peoples', '/admin/sys-role', '/0/2/52', 'C', '无', 'admin:sysRole:list', 2, 1, '', '/admin/sys-role/index', 20, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.120', NULL);
INSERT INTO `sys_menu` VALUES (56, 'SysDeptManage', '部门管理', 'tree', '/admin/sys-dept', '/0/2/56', 'C', '无', 'admin:sysDept:list', 2, 0, '', '/admin/sys-dept/index', 40, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.120', NULL);
INSERT INTO `sys_menu` VALUES (57, 'SysPostManage', '岗位管理', 'pass', '/admin/sys-post', '/0/2/57', 'C', '无', 'admin:sysPost:list', 2, 0, '', '/admin/sys-post/index', 50, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.121', NULL);
INSERT INTO `sys_menu` VALUES (58, 'Dict', '字典管理', 'education', '/admin/dict', '/0/2/58', 'C', '无', 'admin:sysDictType:list', 2, 0, '', '/admin/dict/index', 60, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.122', NULL);
INSERT INTO `sys_menu` VALUES (59, 'SysDictDataManage', '字典数据', 'education', '/admin/dict/data/:dictId', '/0/2/59', 'C', '无', 'admin:sysDictData:list', 2, 0, '', '/admin/dict/data', 100, '1', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.122', NULL);
INSERT INTO `sys_menu` VALUES (60, 'Tools', '开发工具', 'dev-tools', '/dev-tools', '/0/60', 'M', '无', '', 0, 0, '', 'Layout', 40, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.118', NULL);
INSERT INTO `sys_menu` VALUES (61, 'Swagger', '系统接口', 'guide', '/dev-tools/swagger', '/0/60/61', 'C', '无', '', 60, 0, '', '/dev-tools/swagger/index', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.152', NULL);
INSERT INTO `sys_menu` VALUES (62, 'SysConfigManage', '参数管理', 'swagger', '/admin/sys-config', '/0/2/62', 'C', '无', 'admin:sysConfig:list', 2, 0, '', '/admin/sys-config/index', 70, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.123', NULL);
INSERT INTO `sys_menu` VALUES (211, 'Log', '日志管理', 'log', '/log', '/0/2/211', 'M', '', '', 2, 0, '', '/log/index', 80, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.123', NULL);
INSERT INTO `sys_menu` VALUES (212, 'SysLoginLogManage', '登录日志', 'logininfor', '/admin/sys-login-log', '/0/2/211/212', 'C', '', 'admin:sysLoginLog:list', 211, 0, '', '/admin/sys-login-log/index', 1, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.157', NULL);
INSERT INTO `sys_menu` VALUES (216, 'OperLog', '操作日志', 'skill', '/admin/sys-oper-log', '/0/2/211/216', 'C', '', 'admin:sysOperLog:list', 211, 0, '', '/admin/sys-oper-log/index', 1, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.158', NULL);
INSERT INTO `sys_menu` VALUES (220, '', '新增菜单', 'app-group-fill', '', '/0/2/51/220', 'F', '', 'admin:sysMenu:add', 51, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.127', NULL);
INSERT INTO `sys_menu` VALUES (221, '', '修改菜单', 'app-group-fill', '', '/0/2/51/221', 'F', '', 'admin:sysMenu:edit', 51, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.128', NULL);
INSERT INTO `sys_menu` VALUES (222, '', '查询菜单', 'app-group-fill', '', '/0/2/51/222', 'F', '', 'admin:sysMenu:query', 51, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.129', NULL);
INSERT INTO `sys_menu` VALUES (223, '', '删除菜单', 'app-group-fill', '', '/0/2/51/223', 'F', '', 'admin:sysMenu:remove', 51, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.130', NULL);
INSERT INTO `sys_menu` VALUES (224, '', '新增角色', 'app-group-fill', '', '/0/2/52/224', 'F', '', 'admin:sysRole:add', 52, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.130', NULL);
INSERT INTO `sys_menu` VALUES (225, '', '查询角色', 'app-group-fill', '', '/0/2/52/225', 'F', '', 'admin:sysRole:query', 52, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.131', NULL);
INSERT INTO `sys_menu` VALUES (226, '', '修改角色', 'app-group-fill', '', '/0/2/52/226', 'F', '', 'admin:sysRole:update', 52, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.131', NULL);
INSERT INTO `sys_menu` VALUES (227, '', '删除角色', 'app-group-fill', '', '/0/2/52/227', 'F', '', 'admin:sysRole:remove', 52, 0, '', '', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.132', NULL);
INSERT INTO `sys_menu` VALUES (228, '', '查询部门', 'app-group-fill', '', '/0/2/56/228', 'F', '', 'admin:sysDept:query', 56, 0, '', '', 40, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.143', NULL);
INSERT INTO `sys_menu` VALUES (229, '', '新增部门', 'app-group-fill', '', '/0/2/56/229', 'F', '', 'admin:sysDept:add', 56, 0, '', '', 10, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.144', NULL);
INSERT INTO `sys_menu` VALUES (230, '', '修改部门', 'app-group-fill', '', '/0/2/56/230', 'F', '', 'admin:sysDept:edit', 56, 0, '', '', 30, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.144', NULL);
INSERT INTO `sys_menu` VALUES (231, '', '删除部门', 'app-group-fill', '', '/0/2/56/231', 'F', '', 'admin:sysDept:remove', 56, 0, '', '', 20, '0', '1', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.145', NULL);
INSERT INTO `sys_menu` VALUES (232, '', '查询岗位', 'app-group-fill', '', '/0/2/57/232', 'F', '', 'admin:sysPost:query', 57, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.145', NULL);
INSERT INTO `sys_menu` VALUES (233, '', '新增岗位', 'app-group-fill', '', '/0/2/57/233', 'F', '', 'admin:sysPost:add', 57, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.146', NULL);
INSERT INTO `sys_menu` VALUES (234, '', '修改岗位', 'app-group-fill', '', '/0/2/57/234', 'F', '', 'admin:sysPost:edit', 57, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.147', NULL);
INSERT INTO `sys_menu` VALUES (235, '', '删除岗位', 'app-group-fill', '', '/0/2/57/235', 'F', '', 'admin:sysPost:remove', 57, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.148', NULL);
INSERT INTO `sys_menu` VALUES (236, '', '查询字典', 'app-group-fill', '', '/0/2/58/236', 'F', '', 'admin:sysDictType:query', 58, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.148', NULL);
INSERT INTO `sys_menu` VALUES (237, '', '新增类型', 'app-group-fill', '', '/0/2/58/237', 'F', '', 'admin:sysDictType:add', 58, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.149', NULL);
INSERT INTO `sys_menu` VALUES (238, '', '修改类型', 'app-group-fill', '', '/0/2/58/238', 'F', '', 'admin:sysDictType:edit', 58, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.149', NULL);
INSERT INTO `sys_menu` VALUES (239, '', '删除类型', 'app-group-fill', '', '/0/2/58/239', 'F', '', 'system:sysdicttype:remove', 58, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.150', NULL);
INSERT INTO `sys_menu` VALUES (240, '', '查询数据', 'app-group-fill', '', '/0/2/59/240', 'F', '', 'admin:sysDictData:query', 59, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.150', NULL);
INSERT INTO `sys_menu` VALUES (241, '', '新增数据', 'app-group-fill', '', '/0/2/59/241', 'F', '', 'admin:sysDictData:add', 59, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.151', NULL);
INSERT INTO `sys_menu` VALUES (242, '', '修改数据', 'app-group-fill', '', '/0/2/59/242', 'F', '', 'admin:sysDictData:edit', 59, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.151', NULL);
INSERT INTO `sys_menu` VALUES (243, '', '删除数据', 'app-group-fill', '', '/0/2/59/243', 'F', '', 'admin:sysDictData:remove', 59, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.152', NULL);
INSERT INTO `sys_menu` VALUES (244, '', '查询参数', 'app-group-fill', '', '/0/2/62/244', 'F', '', 'admin:sysConfig:query', 62, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.155', NULL);
INSERT INTO `sys_menu` VALUES (245, '', '新增参数', 'app-group-fill', '', '/0/2/62/245', 'F', '', 'admin:sysConfig:add', 62, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.156', NULL);
INSERT INTO `sys_menu` VALUES (246, '', '修改参数', 'app-group-fill', '', '/0/2/62/246', 'F', '', 'admin:sysConfig:edit', 62, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.156', NULL);
INSERT INTO `sys_menu` VALUES (247, '', '删除参数', 'app-group-fill', '', '/0/2/62/247', 'F', '', 'admin:sysConfig:remove', 62, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.157', NULL);
INSERT INTO `sys_menu` VALUES (248, '', '查询登录日志', 'app-group-fill', '', '/0/2/211/212/248', 'F', '', 'admin:sysLoginLog:query', 212, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.159', NULL);
INSERT INTO `sys_menu` VALUES (249, '', '删除登录日志', 'app-group-fill', '', '/0/2/211/212/249', 'F', '', 'admin:sysLoginLog:remove', 212, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.159', NULL);
INSERT INTO `sys_menu` VALUES (250, '', '查询操作日志', 'app-group-fill', '', '/0/2/211/216/250', 'F', '', 'admin:sysOperLog:query', 216, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.160', NULL);
INSERT INTO `sys_menu` VALUES (251, '', '删除操作日志', 'app-group-fill', '', '/0/2/211/216/251', 'F', '', 'admin:sysOperLog:remove', 216, 0, '', '', 0, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.161', NULL);
INSERT INTO `sys_menu` VALUES (261, 'Gen', '代码生成', 'code', '/dev-tools/gen', '/0/60/261', 'C', '', '', 60, 0, '', '/dev-tools/gen/index', 2, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.153', NULL);
INSERT INTO `sys_menu` VALUES (262, 'EditTable', '代码生成修改', 'build', '/dev-tools/editTable', '/0/60/262', 'C', '', '', 60, 0, '', '/dev-tools/gen/editTable', 100, '1', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.154', NULL);
INSERT INTO `sys_menu` VALUES (264, 'Build', '表单构建', 'build', '/dev-tools/build', '/0/60/264', 'C', '', '', 60, 0, '', '/dev-tools/build/index', 1, '0', '1', 1, 1, '2020-04-11 15:52:48.000', '2023-07-09 21:24:45.154', NULL);
INSERT INTO `sys_menu` VALUES (269, 'ServerMonitor', '服务监控', 'druid', '/sys-tools/monitor', '/0/537/269', 'C', '', 'sysTools:serverMonitor:list', 537, 0, '', '/sys-tools/monitor', 0, '0', '1', 1, 1, '2020-04-14 00:28:19.000', '2023-07-09 21:24:45.174', NULL);
INSERT INTO `sys_menu` VALUES (459, 'Schedule', '定时任务', 'time-range', '/schedule', '/0/459', 'M', '无', '', 0, 0, '', 'Layout', 20, '0', '1', 1, 1, '2020-08-03 09:17:37.000', '2023-07-09 21:24:45.118', NULL);
INSERT INTO `sys_menu` VALUES (460, 'ScheduleManage', 'Schedule', 'job', '/schedule/manage', '/0/459/460', 'C', '无', 'job:sysJob:list', 459, 0, '', '/schedule/index', 0, '0', '1', 1, 1, '2020-08-03 09:17:37.000', '2023-07-09 21:24:45.161', NULL);
INSERT INTO `sys_menu` VALUES (461, 'sys_job', '分页获取定时任务', 'app-group-fill', '', '/0/459/460/461', 'F', '无', 'job:sysJob:query', 460, 0, '', '', 0, '0', '1', 1, 1, '2020-08-03 09:17:37.000', '2023-07-09 21:24:45.162', NULL);
INSERT INTO `sys_menu` VALUES (462, 'sys_job', '创建定时任务', 'app-group-fill', '', '/0/459/460/462', 'F', '无', 'job:sysJob:add', 460, 0, '', '', 0, '0', '1', 1, 1, '2020-08-03 09:17:37.000', '2023-07-09 21:24:45.163', NULL);
INSERT INTO `sys_menu` VALUES (463, 'sys_job', '修改定时任务', 'app-group-fill', '', '/0/459/460/463', 'F', '无', 'job:sysJob:edit', 460, 0, '', '', 0, '0', '1', 1, 1, '2020-08-03 09:17:37.000', '2023-07-09 21:24:45.164', NULL);
INSERT INTO `sys_menu` VALUES (464, 'sys_job', '删除定时任务', 'app-group-fill', '', '/0/459/460/464', 'F', '无', 'job:sysJob:remove', 460, 0, '', '', 0, '0', '1', 1, 1, '2020-08-03 09:17:37.000', '2023-07-09 21:24:45.164', NULL);
INSERT INTO `sys_menu` VALUES (471, 'JobLog', '日志', 'bug', '/schedule/log', '/0/459/471', 'C', '', '', 459, 0, '', '/schedule/log', 0, '1', '1', 1, 1, '2020-08-05 21:24:46.000', '2023-07-09 21:24:45.162', NULL);
INSERT INTO `sys_menu` VALUES (528, 'SysApiManage', '接口管理', 'api-doc', '/admin/sys-api', '/0/2/528', 'C', '无', 'admin:sysApi:list', 2, 0, '', '/admin/sys-api/index', 0, '0', '0', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.124', NULL);
INSERT INTO `sys_menu` VALUES (529, '', '查询接口', 'app-group-fill', '', '/0/2/528/529', 'F', '无', 'admin:sysApi:query', 528, 0, '', '', 40, '0', '0', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.165', NULL);
INSERT INTO `sys_menu` VALUES (531, '', '修改接口', 'app-group-fill', '', '/0/2/528/531', 'F', '无', 'admin:sysApi:edit', 528, 0, '', '', 30, '0', '0', 0, 1, '2021-05-20 22:08:44.526', '2023-07-09 21:24:45.165', NULL);
INSERT INTO `sys_menu` VALUES (537, 'SysTools', '系统工具', 'system-tools', '/sys-tools', '/0/537', 'M', '', '', 0, 0, '', 'Layout', 30, '0', '1', 1, 1, '2021-05-21 11:13:32.166', '2023-07-09 21:24:45.118', NULL);
INSERT INTO `sys_menu` VALUES (540, 'SysConfigSet', '参数设置', 'system-tools', '/admin/sys-config/set', '/0/2/540', 'C', '', 'admin:sysConfigSet:list', 2, 0, '', '/admin/sys-config/set', 0, '0', '1', 1, 1, '2021-05-25 16:06:52.560', '2023-07-09 21:24:45.125', NULL);
INSERT INTO `sys_menu` VALUES (542, '', '修改', 'upload', '', '/0/2/540/542', 'F', '', 'admin:sysConfigSet:update', 540, 0, '', '', 0, '0', '1', 1, 1, '2021-06-13 11:45:48.670', '2023-07-09 21:24:45.175', NULL);

-- ----------------------------
-- Table structure for sys_menu_api_rule
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu_api_rule`;
CREATE TABLE `sys_menu_api_rule`  (
  `sys_menu_menu_id` bigint(20) NOT NULL,
  `sys_api_id` bigint(20) NOT NULL COMMENT '主键编码',
  PRIMARY KEY (`sys_menu_menu_id`, `sys_api_id`) USING BTREE,
  INDEX `fk_sys_menu_api_rule_sys_api`(`sys_api_id` ASC) USING BTREE,
  CONSTRAINT `fk_sys_menu_api_rule_sys_api` FOREIGN KEY (`sys_api_id`) REFERENCES `sys_api` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_sys_menu_api_rule_sys_menu` FOREIGN KEY (`sys_menu_menu_id`) REFERENCES `sys_menu` (`menu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu_api_rule
-- ----------------------------
INSERT INTO `sys_menu_api_rule` VALUES (216, 6);
INSERT INTO `sys_menu_api_rule` VALUES (250, 6);
INSERT INTO `sys_menu_api_rule` VALUES (58, 21);
INSERT INTO `sys_menu_api_rule` VALUES (236, 21);
INSERT INTO `sys_menu_api_rule` VALUES (238, 23);
INSERT INTO `sys_menu_api_rule` VALUES (59, 24);
INSERT INTO `sys_menu_api_rule` VALUES (240, 24);
INSERT INTO `sys_menu_api_rule` VALUES (242, 25);
INSERT INTO `sys_menu_api_rule` VALUES (58, 26);
INSERT INTO `sys_menu_api_rule` VALUES (236, 26);
INSERT INTO `sys_menu_api_rule` VALUES (56, 27);
INSERT INTO `sys_menu_api_rule` VALUES (228, 27);
INSERT INTO `sys_menu_api_rule` VALUES (230, 28);
INSERT INTO `sys_menu_api_rule` VALUES (226, 29);
INSERT INTO `sys_menu_api_rule` VALUES (51, 39);
INSERT INTO `sys_menu_api_rule` VALUES (222, 39);
INSERT INTO `sys_menu_api_rule` VALUES (221, 41);
INSERT INTO `sys_menu_api_rule` VALUES (52, 44);
INSERT INTO `sys_menu_api_rule` VALUES (225, 44);
INSERT INTO `sys_menu_api_rule` VALUES (226, 45);
INSERT INTO `sys_menu_api_rule` VALUES (226, 46);
INSERT INTO `sys_menu_api_rule` VALUES (226, 47);
INSERT INTO `sys_menu_api_rule` VALUES (62, 53);
INSERT INTO `sys_menu_api_rule` VALUES (244, 53);
INSERT INTO `sys_menu_api_rule` VALUES (246, 54);
INSERT INTO `sys_menu_api_rule` VALUES (57, 59);
INSERT INTO `sys_menu_api_rule` VALUES (232, 59);
INSERT INTO `sys_menu_api_rule` VALUES (234, 60);
INSERT INTO `sys_menu_api_rule` VALUES (241, 80);
INSERT INTO `sys_menu_api_rule` VALUES (237, 81);
INSERT INTO `sys_menu_api_rule` VALUES (229, 82);
INSERT INTO `sys_menu_api_rule` VALUES (245, 87);
INSERT INTO `sys_menu_api_rule` VALUES (220, 88);
INSERT INTO `sys_menu_api_rule` VALUES (233, 89);
INSERT INTO `sys_menu_api_rule` VALUES (224, 90);
INSERT INTO `sys_menu_api_rule` VALUES (531, 92);
INSERT INTO `sys_menu_api_rule` VALUES (242, 101);
INSERT INTO `sys_menu_api_rule` VALUES (238, 102);
INSERT INTO `sys_menu_api_rule` VALUES (230, 103);
INSERT INTO `sys_menu_api_rule` VALUES (226, 106);
INSERT INTO `sys_menu_api_rule` VALUES (226, 107);
INSERT INTO `sys_menu_api_rule` VALUES (246, 108);
INSERT INTO `sys_menu_api_rule` VALUES (221, 109);
INSERT INTO `sys_menu_api_rule` VALUES (234, 110);
INSERT INTO `sys_menu_api_rule` VALUES (249, 114);
INSERT INTO `sys_menu_api_rule` VALUES (251, 115);
INSERT INTO `sys_menu_api_rule` VALUES (243, 120);
INSERT INTO `sys_menu_api_rule` VALUES (239, 121);
INSERT INTO `sys_menu_api_rule` VALUES (231, 122);
INSERT INTO `sys_menu_api_rule` VALUES (247, 125);
INSERT INTO `sys_menu_api_rule` VALUES (223, 126);
INSERT INTO `sys_menu_api_rule` VALUES (235, 127);
INSERT INTO `sys_menu_api_rule` VALUES (227, 128);
INSERT INTO `sys_menu_api_rule` VALUES (51, 135);
INSERT INTO `sys_menu_api_rule` VALUES (528, 135);
INSERT INTO `sys_menu_api_rule` VALUES (529, 135);
INSERT INTO `sys_menu_api_rule` VALUES (531, 136);
INSERT INTO `sys_menu_api_rule` VALUES (212, 137);
INSERT INTO `sys_menu_api_rule` VALUES (248, 137);
INSERT INTO `sys_menu_api_rule` VALUES (542, 139);
INSERT INTO `sys_menu_api_rule` VALUES (540, 140);
INSERT INTO `sys_menu_api_rule` VALUES (3, 141);
INSERT INTO `sys_menu_api_rule` VALUES (44, 141);
INSERT INTO `sys_menu_api_rule` VALUES (45, 142);
INSERT INTO `sys_menu_api_rule` VALUES (43, 150);
INSERT INTO `sys_menu_api_rule` VALUES (45, 151);
INSERT INTO `sys_menu_api_rule` VALUES (46, 156);

-- ----------------------------
-- Table structure for sys_migration
-- ----------------------------
DROP TABLE IF EXISTS `sys_migration`;
CREATE TABLE `sys_migration`  (
  `version` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `apply_time` datetime(3) NULL DEFAULT NULL,
  PRIMARY KEY (`version`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_migration
-- ----------------------------
INSERT INTO `sys_migration` VALUES ('1599190683659', '2023-07-09 21:24:45.100');
INSERT INTO `sys_migration` VALUES ('1653638869132', '2023-07-09 21:24:45.175');

-- ----------------------------
-- Table structure for sys_opera_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_opera_log`;
CREATE TABLE `sys_opera_log`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键编码',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '操作模块',
  `business_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '操作类型',
  `business_types` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'BusinessTypes',
  `method` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '函数',
  `request_method` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '请求方式: GET POST PUT DELETE',
  `operator_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '操作类型',
  `oper_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '操作者',
  `dept_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '部门名称',
  `oper_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '访问地址',
  `oper_ip` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '客户端ip',
  `oper_location` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '访问位置',
  `oper_param` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '请求参数',
  `status` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '操作状态 1:正常 2:关闭',
  `oper_time` timestamp NULL DEFAULT NULL COMMENT '操作时间',
  `json_result` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '返回数据',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `latency_time` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '耗时',
  `user_agent` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'ua',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_opera_log_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_opera_log_update_by`(`update_by` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_opera_log
-- ----------------------------

-- ----------------------------
-- Table structure for sys_operation_records
-- ----------------------------
DROP TABLE IF EXISTS `sys_operation_records`;
CREATE TABLE `sys_operation_records`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `ip` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '请求ip',
  `method` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '请求方法',
  `path` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '请求路径',
  `status` bigint(20) NULL DEFAULT NULL COMMENT '请求状态',
  `latency` bigint(20) NULL DEFAULT NULL COMMENT '延迟',
  `agent` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '代理',
  `error_message` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '错误信息',
  `body` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '请求Body',
  `resp` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '响应Body',
  `user_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_operation_records_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 315 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_operation_records
-- ----------------------------
INSERT INTO `sys_operation_records` VALUES (296, '2023-07-26 12:00:26.521', '2023-07-26 12:00:26.521', NULL, '127.0.0.1', 'POST', '/pdMock/createPdMock', 200, 6951700, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"title\":\"测试原型\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (297, '2023-07-26 12:00:48.399', '2023-07-26 12:00:48.399', NULL, '127.0.0.1', 'POST', '/pdRelease/createPdRelease', 200, 189131100, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"mockupId\":1,\"releaseNote\":\"123\",\"mockup_html\":\"\",\"mockupName\":\"\",\"mockupFile\":\"uploads/file/fe01ce2a7fbac8fafaed7c982a04e229_20230726120046.zip\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (298, '2023-07-26 12:06:21.423', '2023-07-26 12:06:21.423', NULL, '127.0.0.1', 'POST', '/user/admin_register', 200, 131808900, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"username\":\"\",\"password\":\"123456\",\"nickName\":\"张三\",\"headerImg\":\"\",\"authorityId\":9528,\"authorityIds\":[9528],\"enable\":1,\"userName\":\"zhangsan\"}', '{\"code\":0,\"data\":{\"user\":{\"ID\":3,\"CreatedAt\":\"2023-07-26T12:06:21.34+08:00\",\"UpdatedAt\":\"2023-07-26T12:06:21.34+08:00\",\"uuid\":\"9d4524c5-b272-4d26-aee4-ef81e4ccd5ee\",\"userName\":\"zhangsan\",\"nickName\":\"张三\",\"sideMode\":\"dark\",\"headerImg\":\"https://qmplusimg.henrongyi.top/gva_header.jpg\",\"baseColor\":\"#fff\",\"activeColor\":\"#1890ff\",\"authorityId\":9528,\"authority\":{\"CreatedAt\":\"0001-01-01T00:00:00Z\",\"UpdatedAt\":\"0001-01-01T00:00:00Z\",\"DeletedAt\":null,\"authorityId\":0,\"authorityName\":\"\",\"parentId\":null,\"dataAuthorityId\":null,\"children\":null,\"menus\":null,\"defaultRouter\":\"\"},\"authorities\":[{\"CreatedAt\":\"2023-07-26T12:06:21.34+08:00\",\"UpdatedAt\":\"2023-07-26T12:06:21.34+08:00\",\"DeletedAt\":null,\"authorityId\":9528,\"authorityName\":\"\",\"parentId\":null,\"dataAuthorityId\":null,\"children\":null,\"menus\":null,\"defaultRouter\":\"dashboard\"}],\"phone\":\"\",\"email\":\"\",\"enable\":1}},\"msg\":\"注册成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (299, '2023-07-26 12:06:33.122', '2023-07-26 12:06:33.122', NULL, '127.0.0.1', 'PUT', '/authority/updateAuthority', 200, 90388900, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"authorityId\":9528,\"authorityName\":\"产品经理\",\"parentId\":0}', '{\"code\":0,\"data\":{\"authority\":{\"CreatedAt\":\"0001-01-01T00:00:00Z\",\"UpdatedAt\":\"0001-01-01T00:00:00Z\",\"DeletedAt\":null,\"authorityId\":9528,\"authorityName\":\"产品经理\",\"parentId\":0,\"dataAuthorityId\":null,\"children\":null,\"menus\":null,\"defaultRouter\":\"\"}},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (300, '2023-07-26 12:06:42.357', '2023-07-26 12:06:42.357', NULL, '127.0.0.1', 'POST', '/menu/addMenuAuthority', 200, 40323600, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"menus\":[{\"ID\":32,\"CreatedAt\":\"2023-07-09T23:46:24.987+08:00\",\"UpdatedAt\":\"2023-07-09T23:46:24.987+08:00\",\"parentId\":\"0\",\"path\":\"mock\",\"name\":\"mock\",\"hidden\":false,\"component\":\"view/routerHolder.vue\",\"sort\":0,\"meta\":{\"activeName\":\"\",\"keepAlive\":false,\"defaultMenu\":false,\"title\":\"原型管理\",\"icon\":\"aim\",\"closeTab\":false},\"authoritys\":null,\"children\":[{\"ID\":33,\"CreatedAt\":\"2023-07-09T23:47:50.759+08:00\",\"UpdatedAt\":\"2023-07-09T23:47:50.759+08:00\",\"parentId\":\"32\",\"path\":\"mocklist\",\"name\":\"mocklist\",\"hidden\":false,\"component\":\"view/pdMock/pdMock.vue\",\"sort\":0,\"meta\":{\"activeName\":\"\",\"keepAlive\":false,\"defaultMenu\":false,\"title\":\"原型管理\",\"icon\":\"aim\",\"closeTab\":false},\"authoritys\":null,\"children\":null,\"parameters\":[],\"menuBtn\":[]},{\"ID\":35,\"CreatedAt\":\"2023-07-10T11:57:51.083+08:00\",\"UpdatedAt\":\"2023-07-12T18:03:33.702+08:00\",\"parentId\":\"32\",\"path\":\"release/:id\",\"name\":\"release\",\"hidden\":true,\"component\":\"view/pdRelease/pdRelease.vue\",\"sort\":0,\"meta\":{\"activeName\":\"\",\"keepAlive\":false,\"defaultMenu\":false,\"title\":\"发布列表\",\"icon\":\"alarm-clock\",\"closeTab\":false},\"authoritys\":null,\"children\":null,\"parameters\":[],\"menuBtn\":[]}],\"parameters\":[],\"menuBtn\":[]},{\"ID\":33,\"CreatedAt\":\"2023-07-09T23:47:50.759+08:00\",\"UpdatedAt\":\"2023-07-09T23:47:50.759+08:00\",\"parentId\":\"32\",\"path\":\"mocklist\",\"name\":\"mocklist\",\"hidden\":false,\"component\":\"view/pdMock/pdMock.vue\",\"sort\":0,\"meta\":{\"activeName\":\"\",\"keepAlive\":false,\"defaultMenu\":false,\"title\":\"原型管理\",\"icon\":\"aim\",\"closeTab\":false},\"authoritys\":null,\"children\":null,\"parameters\":[],\"menuBtn\":[]},{\"ID\":35,\"CreatedAt\":\"2023-07-10T11:57:51.083+08:00\",\"UpdatedAt\":\"2023-07-12T18:03:33.702+08:00\",\"parentId\":\"32\",\"path\":\"release/:id\",\"name\":\"release\",\"hidden\":true,\"component\":\"view/pdRelease/pdRelease.vue\",\"sort\":0,\"meta\":{\"activeName\":\"\",\"keepAlive\":false,\"defaultMenu\":false,\"title\":\"发布列表\",\"icon\":\"alarm-clock\",\"closeTab\":false},\"authoritys\":null,\"children\":null,\"parameters\":[],\"menuBtn\":[]},{\"ID\":1,\"CreatedAt\":\"2023-07-09T23:26:34.643+08:00\",\"UpdatedAt\":\"2023-07-09T23:26:34.643+08:00\",\"parentId\":\"0\",\"path\":\"dashboard\",\"name\":\"dashboard\",\"hidden\":false,\"component\":\"view/dashboard/index.vue\",\"sort\":1,\"meta\":{\"activeName\":\"\",\"keepAlive\":false,\"defaultMenu\":false,\"title\":\"仪表盘\",\"icon\":\"odometer\",\"closeTab\":false},\"authoritys\":null,\"children\":null,\"parameters\":[],\"menuBtn\":[]},{\"ID\":2,\"CreatedAt\":\"2023-07-09T23:26:34.643+08:00\",\"UpdatedAt\":\"2023-07-09T23:26:34.643+08:00\",\"parentId\":\"0\",\"path\":\"about\",\"name\":\"about\",\"hidden\":false,\"component\":\"view/about/index.vue\",\"sort\":9,\"meta\":{\"activeName\":\"\",\"keepAlive\":false,\"defaultMenu\":false,\"title\":\"关于我们\",\"icon\":\"info-filled\",\"closeTab\":false},\"authoritys\":null,\"children\":null,\"parameters\":[],\"menuBtn\":[]}],\"authorityId\":9528}', '{\"code\":0,\"data\":{},\"msg\":\"添加成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (301, '2023-07-26 12:06:51.955', '2023-07-26 12:06:51.955', NULL, '127.0.0.1', 'POST', '/casbin/updateCasbin', 200, 42630700, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"authorityId\":9528,\"casbinInfos\":[{\"path\":\"/jwt/jsonInBlacklist\",\"method\":\"POST\"},{\"path\":\"/user/admin_register\",\"method\":\"POST\"},{\"path\":\"/user/getUserList\",\"method\":\"POST\"},{\"path\":\"/user/getUserInfo\",\"method\":\"GET\"},{\"path\":\"/user/changePassword\",\"method\":\"POST\"},{\"path\":\"/user/setUserAuthority\",\"method\":\"POST\"},{\"path\":\"/api/createApi\",\"method\":\"POST\"},{\"path\":\"/api/deleteApi\",\"method\":\"POST\"},{\"path\":\"/api/updateApi\",\"method\":\"POST\"},{\"path\":\"/api/getApiList\",\"method\":\"POST\"},{\"path\":\"/api/getAllApis\",\"method\":\"POST\"},{\"path\":\"/api/getApiById\",\"method\":\"POST\"},{\"path\":\"/authority/createAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/deleteAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/getAuthorityList\",\"method\":\"POST\"},{\"path\":\"/authority/setDataAuthority\",\"method\":\"POST\"},{\"path\":\"/casbin/updateCasbin\",\"method\":\"POST\"},{\"path\":\"/casbin/getPolicyPathByAuthorityId\",\"method\":\"POST\"},{\"path\":\"/menu/addBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getMenu\",\"method\":\"POST\"},{\"path\":\"/menu/deleteBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/updateBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuById\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuList\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuTree\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/menu/addMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/upload\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/deleteFile\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/editFileName\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/getFileList\",\"method\":\"POST\"},{\"path\":\"/system/getSystemConfig\",\"method\":\"POST\"},{\"path\":\"/system/setSystemConfig\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"PUT\"},{\"path\":\"/customer/customer\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"DELETE\"},{\"path\":\"/customer/customer\",\"method\":\"GET\"},{\"path\":\"/customer/customerList\",\"method\":\"GET\"},{\"path\":\"/autoCode/createTemp\",\"method\":\"POST\"},{\"path\":\"/pdMock/createPdMock\",\"method\":\"POST\"},{\"path\":\"/pdMock/deletePdMock\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/deletePdMockByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/updatePdMock\",\"method\":\"PUT\"},{\"path\":\"/pdMock/findPdMock\",\"method\":\"GET\"},{\"path\":\"/pdMock/getPdMockList\",\"method\":\"GET\"},{\"path\":\"/pdRelease/createPdRelease\",\"method\":\"POST\"},{\"path\":\"/pdRelease/deletePdRelease\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/deletePdReleaseByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/updatePdRelease\",\"method\":\"PUT\"},{\"path\":\"/pdRelease/findPdRelease\",\"method\":\"GET\"},{\"path\":\"/pdRelease/getPdReleaseList\",\"method\":\"GET\"}]}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (302, '2023-07-26 12:50:54.724', '2023-07-26 12:50:54.724', NULL, '127.0.0.1', 'POST', '/pdMock/createPdMock', 200, 6517500, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"title\":\"测试原型2\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (303, '2023-07-26 12:51:06.396', '2023-07-26 12:51:06.396', NULL, '127.0.0.1', 'POST', '/pdMock/createPdMock', 200, 5816400, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"title\":\"张三的原型\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 3);
INSERT INTO `sys_operation_records` VALUES (304, '2023-07-26 12:51:16.525', '2023-07-26 12:51:16.525', NULL, '127.0.0.1', 'POST', '/pdMock/createPdMock', 200, 5477700, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"title\":\"张三的原型1\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 3);
INSERT INTO `sys_operation_records` VALUES (305, '2023-07-26 12:51:32.830', '2023-07-26 12:51:32.830', NULL, '127.0.0.1', 'DELETE', '/pdMock/deletePdMock', 200, 5789800, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183', '', '{\"ID\":3}', '{\"code\":0,\"data\":{},\"msg\":\"删除成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (306, '2023-08-05 10:38:04.020', '2023-08-05 10:38:04.020', NULL, '127.0.0.1', 'PUT', '/pdMock/updatePdMock', 200, 2508800, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188', '', '{\"ID\":1,\"CreatedAt\":\"2023-07-26T12:00:26.514+08:00\",\"UpdatedAt\":\"2023-07-26T12:00:26.514+08:00\",\"title\":\"测试原型\",\"shareUrl\":\"\",\"shareStatus\":true,\"uid\":0}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (307, '2023-08-11 11:52:43.185', '2023-08-11 11:52:43.185', NULL, '127.0.0.1', 'POST', '/pdRelease/createPdRelease', 200, 430226500, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.200', '', '{\"mockupId\":1,\"title\":\"111\",\"releaseNote\":\"1111\",\"mockup_html\":\"\",\"mockupName\":\"\",\"mockupFile\":\"uploads/file/fe01ce2a7fbac8fafaed7c982a04e229_20230811115241.zip\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (308, '2023-08-11 18:49:34.383', '2023-08-11 18:49:34.383', NULL, '127.0.0.1', 'POST', '/pdRelease/createPdRelease', 200, 223727600, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', '', '{\"mockupId\":1,\"title\":\"111\",\"releaseNote\":\"<p>1111111111111111111111</p>\",\"mockup_html\":\"\",\"mockupName\":\"\",\"mockupFile\":\"uploads/file/fe01ce2a7fbac8fafaed7c982a04e229_20230811184931.zip\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (309, '2023-08-11 18:52:20.608', '2023-08-11 18:52:20.608', NULL, '127.0.0.1', 'POST', '/pdRelease/createPdRelease', 200, 147060900, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', '', '{\"releaseNote\":\"<p>33333</p>\",\"mockup_html\":\"\",\"title\":\"333\",\"mockupFile\":\"uploads/file/fed7bea78a99d2216a5e7f97e9d87152_20230811185218.zip\",\"mockupId\":1}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (310, '2023-08-11 18:58:58.244', '2023-08-11 18:58:58.244', NULL, '127.0.0.1', 'PUT', '/pdRelease/updatePdRelease', 200, 1230200, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', '', '{\"ID\":4,\"CreatedAt\":\"2023-08-11T18:52:20.607+08:00\",\"UpdatedAt\":\"2023-08-11T18:52:20.607+08:00\",\"mockupId\":1,\"title\":\"333\",\"releaseNote\":\"<p>44444</p>\",\"mockup_html\":\"mockup/f4fd62ee-d54e-4ca7-8d40-3d3b596ec2bf/原型0.2/\",\"CreatedBy\":1,\"UpdatedBy\":0,\"DeletedBy\":0}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (311, '2023-08-11 18:59:02.358', '2023-08-11 18:59:02.358', NULL, '127.0.0.1', 'PUT', '/pdRelease/updatePdRelease', 200, 1127600, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', '', '{\"ID\":4,\"CreatedAt\":\"2023-08-11T18:52:20.607+08:00\",\"UpdatedAt\":\"2023-08-11T18:58:58.243+08:00\",\"mockupId\":1,\"title\":\"333\",\"releaseNote\":\"<p>44444</p>\",\"mockup_html\":\"mockup/f4fd62ee-d54e-4ca7-8d40-3d3b596ec2bf/原型0.2/\",\"CreatedBy\":1,\"UpdatedBy\":1,\"DeletedBy\":0}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (312, '2023-08-11 21:17:06.071', '2023-08-11 21:17:06.071', NULL, '127.0.0.1', 'PUT', '/pdRelease/updatePdRelease', 200, 1464300, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', '', '{\"ID\":4,\"CreatedAt\":\"2023-08-11T18:52:20.607+08:00\",\"UpdatedAt\":\"2023-08-11T18:59:02.358+08:00\",\"mockupId\":1,\"title\":\"333\",\"releaseNote\":\"<p><em><code>2022-09-23</code></em></p>\\n<p><em>Feature</em></p>\\n<ul>\\n<li>升级&nbsp;<code>tinymce</code>&nbsp;版本，从 v5.8.x 版本升级到&nbsp;<code>v6.1.2</code>。新增&nbsp;<code>tinymce@6.1.2</code>&nbsp;静态资源包，位置在&nbsp;<code>dist/tinymce</code>&nbsp;目录</li>\\n</ul>\",\"mockup_html\":\"mockup/f4fd62ee-d54e-4ca7-8d40-3d3b596ec2bf/原型0.2/\",\"CreatedBy\":1,\"UpdatedBy\":1,\"DeletedBy\":0}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (313, '2023-08-12 00:13:19.332', '2023-08-12 00:13:19.332', NULL, '127.0.0.1', 'PUT', '/pdRelease/updatePdRelease', 200, 1031100, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.200', '', '{\"ID\":4,\"CreatedAt\":\"2023-08-11T18:52:20.607+08:00\",\"UpdatedAt\":\"2023-08-11T21:17:06.07+08:00\",\"mockupId\":1,\"title\":\"333\",\"releaseNote\":\"<ul>\\n<li>升级&nbsp;<code>tinymce</code>&nbsp;版本，从 v5.8.x 版本升级到&nbsp;<code>v6.1.2</code>。新增&nbsp;<code>tinymce@6.1.2</code>&nbsp;静态资源包，位置在&nbsp;<code>dist/tinymce</code>&nbsp;目录</li>\\n<li>升级&nbsp;<code>tinymce</code>&nbsp;版本，从 v5.8.x 版本升级到&nbsp;<code>v6.1.2</code>。新增&nbsp;<code>tinymce@6.1.2</code>&nbsp;静态资源包，位置在&nbsp;<code>dist/tinymce</code>&nbsp;目录</li>\\n<li>升级&nbsp;<code>tinymce</code>&nbsp;版本，从 v5.8.x 版本升级到&nbsp;<code>v6.1.2</code>。新增&nbsp;<code>tinymce@6.1.2</code>&nbsp;静态资源包，位置在&nbsp;<code>dist/tinymce</code>&nbsp;目录</li>\\n</ul>\",\"mockup_html\":\"mockup/f4fd62ee-d54e-4ca7-8d40-3d3b596ec2bf/原型0.2/\",\"CreatedBy\":1,\"UpdatedBy\":1,\"DeletedBy\":0}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (314, '2023-08-12 00:14:23.157', '2023-08-12 00:14:23.157', NULL, '127.0.0.1', 'POST', '/pdRelease/createPdRelease', 200, 144993500, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.200', '', '{\"releaseNote\":\"<p>Release note 1.1.7:</p>\\n<ol>\\n<li>优化用户搜索功能。</li>\\n<li>推送消息中使用群备注。</li>\\n<li>推送消息中添加发送者和目标头像。</li>\\n<li>优化撤回消息流程。</li>\\n</ol>\",\"mockup_html\":\"\",\"title\":\"Release version 1.1.7\",\"mockupFile\":\"uploads/file/fe01ce2a7fbac8fafaed7c982a04e229_20230812001421.zip\",\"mockupId\":1}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (315, '2023-08-12 22:09:44.573', '2023-08-12 22:09:44.573', NULL, '127.0.0.1', 'POST', '/casbin/updateCasbin', 200, 86593600, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203', '', '{\"authorityId\":9528,\"casbinInfos\":[{\"path\":\"/jwt/jsonInBlacklist\",\"method\":\"POST\"},{\"path\":\"/user/admin_register\",\"method\":\"POST\"},{\"path\":\"/user/getUserList\",\"method\":\"POST\"},{\"path\":\"/user/setSelfInfo\",\"method\":\"PUT\"},{\"path\":\"/user/getUserInfo\",\"method\":\"GET\"},{\"path\":\"/user/changePassword\",\"method\":\"POST\"},{\"path\":\"/user/setUserAuthority\",\"method\":\"POST\"},{\"path\":\"/api/createApi\",\"method\":\"POST\"},{\"path\":\"/api/deleteApi\",\"method\":\"POST\"},{\"path\":\"/api/updateApi\",\"method\":\"POST\"},{\"path\":\"/api/getApiList\",\"method\":\"POST\"},{\"path\":\"/api/getAllApis\",\"method\":\"POST\"},{\"path\":\"/api/getApiById\",\"method\":\"POST\"},{\"path\":\"/authority/createAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/deleteAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/getAuthorityList\",\"method\":\"POST\"},{\"path\":\"/authority/setDataAuthority\",\"method\":\"POST\"},{\"path\":\"/casbin/updateCasbin\",\"method\":\"POST\"},{\"path\":\"/casbin/getPolicyPathByAuthorityId\",\"method\":\"POST\"},{\"path\":\"/menu/addBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getMenu\",\"method\":\"POST\"},{\"path\":\"/menu/deleteBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/updateBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuById\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuList\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuTree\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/menu/addMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/upload\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/deleteFile\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/editFileName\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/getFileList\",\"method\":\"POST\"},{\"path\":\"/system/getSystemConfig\",\"method\":\"POST\"},{\"path\":\"/system/setSystemConfig\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"PUT\"},{\"path\":\"/customer/customer\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"DELETE\"},{\"path\":\"/customer/customer\",\"method\":\"GET\"},{\"path\":\"/customer/customerList\",\"method\":\"GET\"},{\"path\":\"/autoCode/createTemp\",\"method\":\"POST\"},{\"path\":\"/pdMock/createPdMock\",\"method\":\"POST\"},{\"path\":\"/pdMock/deletePdMock\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/deletePdMockByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/updatePdMock\",\"method\":\"PUT\"},{\"path\":\"/pdMock/findPdMock\",\"method\":\"GET\"},{\"path\":\"/pdMock/getPdMockList\",\"method\":\"GET\"},{\"path\":\"/pdRelease/createPdRelease\",\"method\":\"POST\"},{\"path\":\"/pdRelease/deletePdRelease\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/deletePdReleaseByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/updatePdRelease\",\"method\":\"PUT\"},{\"path\":\"/pdRelease/findPdRelease\",\"method\":\"GET\"},{\"path\":\"/pdRelease/getPdReleaseList\",\"method\":\"GET\"}]}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (316, '2023-08-12 22:09:45.838', '2023-08-12 22:09:45.838', NULL, '127.0.0.1', 'POST', '/casbin/updateCasbin', 200, 12742400, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203', '', '{\"authorityId\":9528,\"casbinInfos\":[{\"path\":\"/jwt/jsonInBlacklist\",\"method\":\"POST\"},{\"path\":\"/user/admin_register\",\"method\":\"POST\"},{\"path\":\"/user/getUserList\",\"method\":\"POST\"},{\"path\":\"/user/setSelfInfo\",\"method\":\"PUT\"},{\"path\":\"/user/getUserInfo\",\"method\":\"GET\"},{\"path\":\"/user/changePassword\",\"method\":\"POST\"},{\"path\":\"/user/setUserAuthority\",\"method\":\"POST\"},{\"path\":\"/api/createApi\",\"method\":\"POST\"},{\"path\":\"/api/deleteApi\",\"method\":\"POST\"},{\"path\":\"/api/updateApi\",\"method\":\"POST\"},{\"path\":\"/api/getApiList\",\"method\":\"POST\"},{\"path\":\"/api/getAllApis\",\"method\":\"POST\"},{\"path\":\"/api/getApiById\",\"method\":\"POST\"},{\"path\":\"/authority/createAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/deleteAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/getAuthorityList\",\"method\":\"POST\"},{\"path\":\"/authority/setDataAuthority\",\"method\":\"POST\"},{\"path\":\"/casbin/updateCasbin\",\"method\":\"POST\"},{\"path\":\"/casbin/getPolicyPathByAuthorityId\",\"method\":\"POST\"},{\"path\":\"/menu/addBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getMenu\",\"method\":\"POST\"},{\"path\":\"/menu/deleteBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/updateBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuById\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuList\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuTree\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/menu/addMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/upload\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/deleteFile\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/editFileName\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/getFileList\",\"method\":\"POST\"},{\"path\":\"/system/getSystemConfig\",\"method\":\"POST\"},{\"path\":\"/system/setSystemConfig\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"PUT\"},{\"path\":\"/customer/customer\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"DELETE\"},{\"path\":\"/customer/customer\",\"method\":\"GET\"},{\"path\":\"/customer/customerList\",\"method\":\"GET\"},{\"path\":\"/autoCode/createTemp\",\"method\":\"POST\"},{\"path\":\"/pdMock/createPdMock\",\"method\":\"POST\"},{\"path\":\"/pdMock/deletePdMock\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/deletePdMockByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/updatePdMock\",\"method\":\"PUT\"},{\"path\":\"/pdMock/findPdMock\",\"method\":\"GET\"},{\"path\":\"/pdMock/getPdMockList\",\"method\":\"GET\"},{\"path\":\"/pdRelease/createPdRelease\",\"method\":\"POST\"},{\"path\":\"/pdRelease/deletePdRelease\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/deletePdReleaseByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/updatePdRelease\",\"method\":\"PUT\"},{\"path\":\"/pdRelease/findPdRelease\",\"method\":\"GET\"},{\"path\":\"/pdRelease/getPdReleaseList\",\"method\":\"GET\"}]}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (317, '2023-08-12 22:11:11.473', '2023-08-12 22:11:11.473', NULL, '127.0.0.1', 'POST', '/api/createApi', 200, 38775400, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203', '', '{\"path\":\"/user/getUser\",\"apiGroup\":\"系统用户\",\"method\":\"POST\",\"description\":\"根据id获取用户信息\"}', '{\"code\":0,\"data\":{},\"msg\":\"创建成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (318, '2023-08-12 22:11:20.858', '2023-08-12 22:11:20.858', NULL, '127.0.0.1', 'POST', '/casbin/updateCasbin', 200, 41823200, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203', '', '{\"authorityId\":888,\"casbinInfos\":[{\"path\":\"/jwt/jsonInBlacklist\",\"method\":\"POST\"},{\"path\":\"/user/deleteUser\",\"method\":\"DELETE\"},{\"path\":\"/user/admin_register\",\"method\":\"POST\"},{\"path\":\"/user/getUserList\",\"method\":\"POST\"},{\"path\":\"/user/setUserInfo\",\"method\":\"PUT\"},{\"path\":\"/user/setSelfInfo\",\"method\":\"PUT\"},{\"path\":\"/user/getUserInfo\",\"method\":\"GET\"},{\"path\":\"/user/setUserAuthorities\",\"method\":\"POST\"},{\"path\":\"/user/changePassword\",\"method\":\"POST\"},{\"path\":\"/user/setUserAuthority\",\"method\":\"POST\"},{\"path\":\"/user/resetPassword\",\"method\":\"POST\"},{\"path\":\"/user/getUser\",\"method\":\"POST\"},{\"path\":\"/api/createApi\",\"method\":\"POST\"},{\"path\":\"/api/deleteApi\",\"method\":\"POST\"},{\"path\":\"/api/updateApi\",\"method\":\"POST\"},{\"path\":\"/api/getApiList\",\"method\":\"POST\"},{\"path\":\"/api/getAllApis\",\"method\":\"POST\"},{\"path\":\"/api/getApiById\",\"method\":\"POST\"},{\"path\":\"/api/deleteApisByIds\",\"method\":\"DELETE\"},{\"path\":\"/authority/copyAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/createAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/deleteAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/updateAuthority\",\"method\":\"PUT\"},{\"path\":\"/authority/getAuthorityList\",\"method\":\"POST\"},{\"path\":\"/authority/setDataAuthority\",\"method\":\"POST\"},{\"path\":\"/casbin/updateCasbin\",\"method\":\"POST\"},{\"path\":\"/casbin/getPolicyPathByAuthorityId\",\"method\":\"POST\"},{\"path\":\"/menu/addBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getMenu\",\"method\":\"POST\"},{\"path\":\"/menu/deleteBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/updateBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuById\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuList\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuTree\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/menu/addMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/findFile\",\"method\":\"GET\"},{\"path\":\"/fileUploadAndDownload/breakpointContinue\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/breakpointContinueFinish\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/removeChunk\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/upload\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/deleteFile\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/editFileName\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/getFileList\",\"method\":\"POST\"},{\"path\":\"/system/getServerInfo\",\"method\":\"POST\"},{\"path\":\"/system/getSystemConfig\",\"method\":\"POST\"},{\"path\":\"/system/setSystemConfig\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"PUT\"},{\"path\":\"/customer/customer\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"DELETE\"},{\"path\":\"/customer/customer\",\"method\":\"GET\"},{\"path\":\"/customer/customerList\",\"method\":\"GET\"},{\"path\":\"/autoCode/getDB\",\"method\":\"GET\"},{\"path\":\"/autoCode/getTables\",\"method\":\"GET\"},{\"path\":\"/autoCode/createTemp\",\"method\":\"POST\"},{\"path\":\"/autoCode/preview\",\"method\":\"POST\"},{\"path\":\"/autoCode/getColumn\",\"method\":\"GET\"},{\"path\":\"/autoCode/createPlug\",\"method\":\"POST\"},{\"path\":\"/autoCode/installPlugin\",\"method\":\"POST\"},{\"path\":\"/autoCode/pubPlug\",\"method\":\"POST\"},{\"path\":\"/autoCode/createPackage\",\"method\":\"POST\"},{\"path\":\"/autoCode/getPackage\",\"method\":\"POST\"},{\"path\":\"/autoCode/delPackage\",\"method\":\"POST\"},{\"path\":\"/autoCode/getMeta\",\"method\":\"POST\"},{\"path\":\"/autoCode/rollback\",\"method\":\"POST\"},{\"path\":\"/autoCode/getSysHistory\",\"method\":\"POST\"},{\"path\":\"/autoCode/delSysHistory\",\"method\":\"POST\"},{\"path\":\"/sysDictionaryDetail/updateSysDictionaryDetail\",\"method\":\"PUT\"},{\"path\":\"/sysDictionaryDetail/createSysDictionaryDetail\",\"method\":\"POST\"},{\"path\":\"/sysDictionaryDetail/deleteSysDictionaryDetail\",\"method\":\"DELETE\"},{\"path\":\"/sysDictionaryDetail/findSysDictionaryDetail\",\"method\":\"GET\"},{\"path\":\"/sysDictionaryDetail/getSysDictionaryDetailList\",\"method\":\"GET\"},{\"path\":\"/sysDictionary/createSysDictionary\",\"method\":\"POST\"},{\"path\":\"/sysDictionary/deleteSysDictionary\",\"method\":\"DELETE\"},{\"path\":\"/sysDictionary/updateSysDictionary\",\"method\":\"PUT\"},{\"path\":\"/sysDictionary/findSysDictionary\",\"method\":\"GET\"},{\"path\":\"/sysDictionary/getSysDictionaryList\",\"method\":\"GET\"},{\"path\":\"/sysOperationRecord/createSysOperationRecord\",\"method\":\"POST\"},{\"path\":\"/sysOperationRecord/findSysOperationRecord\",\"method\":\"GET\"},{\"path\":\"/sysOperationRecord/getSysOperationRecordList\",\"method\":\"GET\"},{\"path\":\"/sysOperationRecord/deleteSysOperationRecord\",\"method\":\"DELETE\"},{\"path\":\"/sysOperationRecord/deleteSysOperationRecordByIds\",\"method\":\"DELETE\"},{\"path\":\"/simpleUploader/upload\",\"method\":\"POST\"},{\"path\":\"/simpleUploader/checkFileMd5\",\"method\":\"GET\"},{\"path\":\"/simpleUploader/mergeFileMd5\",\"method\":\"GET\"},{\"path\":\"/email/emailTest\",\"method\":\"POST\"},{\"path\":\"/authorityBtn/setAuthorityBtn\",\"method\":\"POST\"},{\"path\":\"/authorityBtn/getAuthorityBtn\",\"method\":\"POST\"},{\"path\":\"/authorityBtn/canRemoveAuthorityBtn\",\"method\":\"POST\"},{\"path\":\"/chatGpt/getTable\",\"method\":\"POST\"},{\"path\":\"/chatGpt/createSK\",\"method\":\"POST\"},{\"path\":\"/chatGpt/getSK\",\"method\":\"GET\"},{\"path\":\"/chatGpt/deleteSK\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/createPdMock\",\"method\":\"POST\"},{\"path\":\"/pdMock/deletePdMock\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/deletePdMockByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/updatePdMock\",\"method\":\"PUT\"},{\"path\":\"/pdMock/findPdMock\",\"method\":\"GET\"},{\"path\":\"/pdMock/getPdMockList\",\"method\":\"GET\"},{\"path\":\"/pdRelease/createPdRelease\",\"method\":\"POST\"},{\"path\":\"/pdRelease/deletePdRelease\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/deletePdReleaseByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/updatePdRelease\",\"method\":\"PUT\"},{\"path\":\"/pdRelease/findPdRelease\",\"method\":\"GET\"},{\"path\":\"/pdRelease/getPdReleaseList\",\"method\":\"GET\"}]}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);
INSERT INTO `sys_operation_records` VALUES (319, '2023-08-12 22:11:26.893', '2023-08-12 22:11:26.893', NULL, '127.0.0.1', 'POST', '/casbin/updateCasbin', 200, 31679100, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203', '', '{\"authorityId\":9528,\"casbinInfos\":[{\"path\":\"/jwt/jsonInBlacklist\",\"method\":\"POST\"},{\"path\":\"/user/admin_register\",\"method\":\"POST\"},{\"path\":\"/user/getUserList\",\"method\":\"POST\"},{\"path\":\"/user/setSelfInfo\",\"method\":\"PUT\"},{\"path\":\"/user/getUserInfo\",\"method\":\"GET\"},{\"path\":\"/user/changePassword\",\"method\":\"POST\"},{\"path\":\"/user/setUserAuthority\",\"method\":\"POST\"},{\"path\":\"/user/getUser\",\"method\":\"POST\"},{\"path\":\"/api/createApi\",\"method\":\"POST\"},{\"path\":\"/api/deleteApi\",\"method\":\"POST\"},{\"path\":\"/api/updateApi\",\"method\":\"POST\"},{\"path\":\"/api/getApiList\",\"method\":\"POST\"},{\"path\":\"/api/getAllApis\",\"method\":\"POST\"},{\"path\":\"/api/getApiById\",\"method\":\"POST\"},{\"path\":\"/authority/createAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/deleteAuthority\",\"method\":\"POST\"},{\"path\":\"/authority/getAuthorityList\",\"method\":\"POST\"},{\"path\":\"/authority/setDataAuthority\",\"method\":\"POST\"},{\"path\":\"/casbin/updateCasbin\",\"method\":\"POST\"},{\"path\":\"/casbin/getPolicyPathByAuthorityId\",\"method\":\"POST\"},{\"path\":\"/menu/addBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getMenu\",\"method\":\"POST\"},{\"path\":\"/menu/deleteBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/updateBaseMenu\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuById\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuList\",\"method\":\"POST\"},{\"path\":\"/menu/getBaseMenuTree\",\"method\":\"POST\"},{\"path\":\"/menu/getMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/menu/addMenuAuthority\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/upload\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/deleteFile\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/editFileName\",\"method\":\"POST\"},{\"path\":\"/fileUploadAndDownload/getFileList\",\"method\":\"POST\"},{\"path\":\"/system/getSystemConfig\",\"method\":\"POST\"},{\"path\":\"/system/setSystemConfig\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"PUT\"},{\"path\":\"/customer/customer\",\"method\":\"POST\"},{\"path\":\"/customer/customer\",\"method\":\"DELETE\"},{\"path\":\"/customer/customer\",\"method\":\"GET\"},{\"path\":\"/customer/customerList\",\"method\":\"GET\"},{\"path\":\"/autoCode/createTemp\",\"method\":\"POST\"},{\"path\":\"/pdMock/createPdMock\",\"method\":\"POST\"},{\"path\":\"/pdMock/deletePdMock\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/deletePdMockByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdMock/updatePdMock\",\"method\":\"PUT\"},{\"path\":\"/pdMock/findPdMock\",\"method\":\"GET\"},{\"path\":\"/pdMock/getPdMockList\",\"method\":\"GET\"},{\"path\":\"/pdRelease/createPdRelease\",\"method\":\"POST\"},{\"path\":\"/pdRelease/deletePdRelease\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/deletePdReleaseByIds\",\"method\":\"DELETE\"},{\"path\":\"/pdRelease/updatePdRelease\",\"method\":\"PUT\"},{\"path\":\"/pdRelease/findPdRelease\",\"method\":\"GET\"},{\"path\":\"/pdRelease/getPdReleaseList\",\"method\":\"GET\"}]}', '{\"code\":0,\"data\":{},\"msg\":\"更新成功\"}', 1);

-- ----------------------------
-- Table structure for sys_post
-- ----------------------------
DROP TABLE IF EXISTS `sys_post`;
CREATE TABLE `sys_post`  (
  `post_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `post_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `post_code` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sort` tinyint(4) NULL DEFAULT NULL,
  `status` tinyint(4) NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`post_id`) USING BTREE,
  INDEX `idx_sys_post_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_post_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_sys_post_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_post
-- ----------------------------
INSERT INTO `sys_post` VALUES (1, '首席执行官', 'CEO', 0, 2, '首席执行官', 1, 1, '2021-05-13 19:56:37.913', '2021-05-13 19:56:37.913', NULL);
INSERT INTO `sys_post` VALUES (2, '首席技术执行官', 'CTO', 2, 2, '首席技术执行官', 1, 1, '2021-05-13 19:56:37.913', '2021-05-13 19:56:37.913', NULL);
INSERT INTO `sys_post` VALUES (3, '首席运营官', 'COO', 3, 2, '测试工程师', 1, 1, '2021-05-13 19:56:37.913', '2021-05-13 19:56:37.913', NULL);

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `role_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role_key` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role_sort` bigint(20) NULL DEFAULT NULL,
  `flag` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `admin` tinyint(1) NULL DEFAULT NULL,
  `data_scope` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`role_id`) USING BTREE,
  INDEX `idx_sys_role_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_role_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_sys_role_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '系统管理员', '2', 'admin', 1, '', '', 1, '', 1, 1, '2021-05-13 19:56:37.913', '2021-05-13 19:56:37.913', NULL);

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept`  (
  `role_id` smallint(6) NOT NULL,
  `dept_id` smallint(6) NOT NULL,
  PRIMARY KEY (`role_id`, `dept_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_dept
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `role_id` bigint(20) NOT NULL,
  `menu_id` bigint(20) NOT NULL,
  PRIMARY KEY (`role_id`, `menu_id`) USING BTREE,
  INDEX `fk_sys_role_menu_sys_menu`(`menu_id` ASC) USING BTREE,
  CONSTRAINT `fk_sys_role_menu_sys_menu` FOREIGN KEY (`menu_id`) REFERENCES `sys_menu` (`menu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_sys_role_menu_sys_role` FOREIGN KEY (`role_id`) REFERENCES `sys_role` (`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------

-- ----------------------------
-- Table structure for sys_tables
-- ----------------------------
DROP TABLE IF EXISTS `sys_tables`;
CREATE TABLE `sys_tables`  (
  `table_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `table_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `table_comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `class_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tpl_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `package_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `module_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `module_front_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '前端文件名',
  `business_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `function_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `function_author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pk_column` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pk_go_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pk_json_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `options` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tree_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tree_parent_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tree_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tree` tinyint(1) NULL DEFAULT 0,
  `crud` tinyint(1) NULL DEFAULT 1,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_data_scope` tinyint(4) NULL DEFAULT NULL,
  `is_actions` tinyint(4) NULL DEFAULT NULL,
  `is_auth` tinyint(4) NULL DEFAULT NULL,
  `is_logical_delete` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `logical_delete` tinyint(1) NULL DEFAULT NULL,
  `logical_delete_column` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`table_id`) USING BTREE,
  INDEX `idx_sys_tables_deleted_at`(`deleted_at` ASC) USING BTREE,
  INDEX `idx_sys_tables_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_tables_update_by`(`update_by` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_tables
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编码',
  `username` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '密码',
  `nick_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '昵称',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '手机号',
  `role_id` bigint(20) NULL DEFAULT NULL COMMENT '角色ID',
  `salt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '加盐',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '头像',
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '性别',
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '邮箱',
  `dept_id` bigint(20) NULL DEFAULT NULL COMMENT '部门',
  `post_id` bigint(20) NULL DEFAULT NULL COMMENT '岗位',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `status` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '状态',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `idx_sys_user_create_by`(`create_by` ASC) USING BTREE,
  INDEX `idx_sys_user_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_sys_user_deleted_at`(`deleted_at` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'admin', '$2a$10$/Glr4g9Svr6O0kvjsRJCXu3f0W8/dsP3XZyVNi1019ratWpSPMyw.', 'zhangwj', '13818888888', 1, '', '', '1', '1@qq.com', 1, 1, '', '2', 1, 1, '2021-05-13 19:56:37.914', '2021-05-13 19:56:40.205', NULL);

-- ----------------------------
-- Table structure for sys_user_authority
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_authority`;
CREATE TABLE `sys_user_authority`  (
  `sys_user_id` bigint(20) UNSIGNED NOT NULL,
  `sys_authority_authority_id` bigint(20) UNSIGNED NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`sys_user_id`, `sys_authority_authority_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user_authority
-- ----------------------------
INSERT INTO `sys_user_authority` VALUES (1, 888);
INSERT INTO `sys_user_authority` VALUES (1, 9528);
INSERT INTO `sys_user_authority` VALUES (3, 9528);

-- ----------------------------
-- Table structure for sys_users
-- ----------------------------
DROP TABLE IF EXISTS `sys_users`;
CREATE TABLE `sys_users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NULL DEFAULT NULL,
  `updated_at` datetime(3) NULL DEFAULT NULL,
  `deleted_at` datetime(3) NULL DEFAULT NULL,
  `uuid` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户UUID',
  `username` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户登录名',
  `password` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户登录密码',
  `nick_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '系统用户' COMMENT '用户昵称',
  `side_mode` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'dark' COMMENT '用户侧边主题',
  `header_img` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'https://qmplusimg.henrongyi.top/gva_header.jpg' COMMENT '用户头像',
  `base_color` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '#fff' COMMENT '基础颜色',
  `active_color` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '#1890ff' COMMENT '活跃颜色',
  `authority_id` bigint(20) UNSIGNED NULL DEFAULT 888 COMMENT '用户角色ID',
  `phone` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户手机号',
  `email` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户邮箱',
  `enable` bigint(20) NULL DEFAULT 1 COMMENT '用户是否被冻结 1正常 2冻结',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_sys_users_deleted_at`(`deleted_at` ASC) USING BTREE,
  INDEX `idx_sys_users_uuid`(`uuid` ASC) USING BTREE,
  INDEX `idx_sys_users_username`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_users
-- ----------------------------
INSERT INTO `sys_users` VALUES (1, '2023-07-09 23:26:34.758', '2023-07-13 18:47:44.359', NULL, 'b580153e-cad2-4a13-973b-a1b8356ddb9c', 'admin', '$2a$10$PIu7WYcB44ZTfWARuLCBne8mIlbvpp1pvh/0nBoxnurr3HFZWOFxC', '管理员', 'dark', 'https://qmplusimg.henrongyi.top/gva_header.jpg', '#fff', '#1890ff', 888, '17611111111', '333333333@qq.com', 1);
INSERT INTO `sys_users` VALUES (2, '2023-07-09 23:26:34.758', '2023-07-09 23:26:34.782', '2023-07-13 18:40:57.639', '531b11f2-88b4-446d-85e6-e248026b09a1', 'a303176530', '$2a$10$d1T34ZELLZ7W6fPJtk2sWOW0yG4XAOvVgR9uQAtLR9GsLTbw.ed.e', '用户1', 'dark', 'https:///qmplusimg.henrongyi.top/1572075907logo.png', '#fff', '#1890ff', 9528, '17611111111', '333333333@qq.com', 1);
INSERT INTO `sys_users` VALUES (3, '2023-07-26 12:06:21.340', '2023-07-26 12:06:21.340', NULL, '9d4524c5-b272-4d26-aee4-ef81e4ccd5ee', 'zhangsan', '$2a$10$VBd9Af6Prrj19.mdx1cZSufx0UzIBo4d5ekC8gZwsa5.IwKqvlJ1S', '张三', 'dark', 'https://qmplusimg.henrongyi.top/gva_header.jpg', '#fff', '#1890ff', 9528, '', '', 1);

-- ----------------------------
-- Table structure for tb_demo
-- ----------------------------
DROP TABLE IF EXISTS `tb_demo`;
CREATE TABLE `tb_demo`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键编码',
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '名称',
  `created_at` datetime(3) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(3) NULL DEFAULT NULL COMMENT '最后更新时间',
  `deleted_at` datetime(3) NULL DEFAULT NULL COMMENT '删除时间',
  `create_by` bigint(20) NULL DEFAULT NULL COMMENT '创建者',
  `update_by` bigint(20) NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_tb_demo_update_by`(`update_by` ASC) USING BTREE,
  INDEX `idx_tb_demo_deleted_at`(`deleted_at` ASC) USING BTREE,
  INDEX `idx_tb_demo_create_by`(`create_by` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_demo
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
