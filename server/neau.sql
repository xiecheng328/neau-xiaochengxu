/*
 Navicat Premium Data Transfer

 Source Server         : mydb
 Source Server Type    : MySQL
 Source Server Version : 100131
 Source Host           : localhost:3306
 Source Schema         : neau

 Target Server Type    : MySQL
 Target Server Version : 100131
 File Encoding         : 65001

 Date: 23/04/2018 19:13:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_apply
-- ----------------------------
DROP TABLE IF EXISTS `t_apply`;
CREATE TABLE `t_apply` (
  `apply_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `job_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`apply_id`),
  KEY `fk_user_userid` (`user_id`),
  KEY `fk_job_jobid` (`job_id`),
  CONSTRAINT `fk_job_jobid` FOREIGN KEY (`job_id`) REFERENCES `t_job` (`job_id`),
  CONSTRAINT `fk_user_userid` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_apply
-- ----------------------------
BEGIN;
INSERT INTO `t_apply` VALUES (1, 1, 1);
INSERT INTO `t_apply` VALUES (2, 1, 2);
INSERT INTO `t_apply` VALUES (5, 2, 1);
COMMIT;

-- ----------------------------
-- Table structure for t_job
-- ----------------------------
DROP TABLE IF EXISTS `t_job`;
CREATE TABLE `t_job` (
  `job_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `salary` int(10) DEFAULT NULL,
  `posttime` date DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_job
-- ----------------------------
BEGIN;
INSERT INTO `t_job` VALUES (1, '百度', '北京', 200, '2018-04-23', 'images/baidu.png');
INSERT INTO `t_job` VALUES (2, '阿里巴巴', '杭州', 300, '2018-04-20', 'images/alibaba.jpeg');
INSERT INTO `t_job` VALUES (3, '今日头条', '北京', 400, '2018-04-17', 'images/toutiao.png');
COMMIT;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_bin NOT NULL,
  `school` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `major` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_user
-- ----------------------------
BEGIN;
INSERT INTO `t_user` VALUES (1, '唯创网讯', '东北农业大学', '计算机科学与技术');
INSERT INTO `t_user` VALUES (2, '张三', '黑龙江大学', '软件工程');
INSERT INTO `t_user` VALUES (3, '李四', '东北林业大学', '物联网');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
