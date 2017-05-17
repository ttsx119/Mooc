CREATE DATABASE  IF NOT EXISTS `mooc` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mooc`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: mooc
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `ID` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Right` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('1','陈辰','123',0),('10','王彤','523',1),('11','白利征','643',1),('12','袁全宁','344',1),('13','檀初阳','4554',1),('14','杨思远','4543',1),('15','张钰禛','234',1),('16','修德琦','543',1),('17','徐若飞','654',1),('18','张若阳','756',1),('19','高艺伟','234',1),('2','孙汝岳','231',1),('20','李磊','645',1),('21','李建东','425',1),('3','刘一材','215',1),('4','王侃','632',1),('5','王蕊','625',1),('6','逯佳','214',1),('7','牛志新','436',1),('8','马志霄','2412',1),('9','杨元猛','214',1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classification`
--

DROP TABLE IF EXISTS `classification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classification` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Link` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `ParentID` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classification`
--

LOCK TABLES `classification` WRITE;
/*!40000 ALTER TABLE `classification` DISABLE KEYS */;
INSERT INTO `classification` VALUES (1,'','互联网技术类',0),(2,'','后端开发',1),(3,'','前端开发',1),(4,'','移动开发',1),(5,'','测试',1),(6,'','运维',1),(7,'','DBA',1),(8,'','JAVA',2),(9,'','C++',2),(10,'','PHP',2),(11,'','数据挖掘',2),(12,'','C',2),(13,'','C#',2),(14,'','.NET',2),(15,'','Hadoop',2),(16,'','Python',2),(17,'','Delphi',2),(18,'','VB',2),(19,'','Perl',2),(20,'','Ruby',2),(21,'','web前端',3),(22,'','Flash',3),(23,'','html5',3),(24,'','JavaScript',3),(25,'','U3D',3),(26,'','COCOS2D-X',3),(27,'','HTML5',4),(28,'','Android',4),(29,'','iOS',4),(30,'','WP',4),(31,'','测试工程 ',5),(32,'','自动化测试',5),(33,'','功能测试',5),(34,'','性能测试',5),(35,'','测试开发',5),(36,'','运维工程',6),(37,'','运维开发工程',6),(38,'','网络工程',6),(39,'','系统工程',6),(40,'','IT支持',6),(41,'','MySQL',7),(42,'','SQLServer',7),(43,'','Oracle',7),(44,'','DB2',7),(45,'','MongoDB',7),(46,'','生活技能',0),(47,'','日常技能',46),(48,'','绣花女红',47),(49,'','蛋糕烘焙',47),(50,'','食品烹饪',47),(51,'','美容美发',47),(52,'','修建除草',47),(53,'','栽花种树',47),(54,'','养鱼养鸟',47),(55,'','高端技能',46),(56,'','挖掘机',55),(57,'','开飞机',55),(58,'','设计',0),(59,'','视觉设计',58),(60,'','网页设计',59),(61,'','Flash设计',59),(62,'','APP设计',59),(63,'','UI设计',59),(64,'','平面设计',59),(65,'','美术设计（2D/3D）',59),(66,'','广告设计',59),(67,'','多媒体设计',59),(68,'','原画技术',59),(69,'','游戏特效制作',59),(70,'','游戏界面设计',59),(71,'','游戏场景设计',59),(72,'','游戏动作设计',59),(73,'','交互设计',58),(74,'','无线交互设计',73),(75,'','网页交互设计',73),(76,'','硬件交互设计',73),(77,'','用户研究',58),(78,'','数据分析',77),(79,'','用户研究',77),(80,'','游戏数值策划',77),(81,'','体育',0),(82,'','球类',81),(83,'','羽毛球',82),(84,'','网球',82),(85,'','篮球',82),(86,'','乒乓球',82),(87,'','台球',82),(88,'','高尔夫',82),(89,'','门球',82),(90,'','足球',82),(91,'','排球',82),(92,'','对抗类',81),(93,'','拳击',92),(94,'','击剑',92),(95,'','格斗',92),(96,'','散打',92),(97,'','留学考研考公',0),(98,'','出国留学',97),(99,'','雅思',98),(100,'','托福',98),(101,'','GRE',98),(102,'','SAT',98),(103,'','LSAT',98),(104,'','ACT',98),(105,'','考研',97),(106,'','考研英语',105),(107,'','政治',105),(108,'','数学',105),(109,'','考公',97),(110,'','申论',109),(111,'','逻辑推理',109),(112,'','数学运算',109),(113,'','言语理解',109),(114,'','资料分析',109),(115,'','常识',109),(116,'','艺术',0),(117,'','演奏类',116),(118,'','钢琴',117),(119,'','琵琶',117),(120,'','古筝',117),(121,'','吉他',117),(122,'','打击乐',116),(123,'','大鼓',122),(124,'','腰鼓',122),(125,'','缶',122),(126,'','竹板',122);
/*!40000 ALTER TABLE `classification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `ID` varchar(255) NOT NULL,
  `Category` int(11) NOT NULL,
  `CourseImgUrl` varchar(255) DEFAULT NULL,
  `CourseTime` datetime NOT NULL,
  `CourseUrl` varchar(255) DEFAULT NULL,
  `Duration` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `StudentNumber` int(11) NOT NULL,
  `TeacherID` int(11) NOT NULL,
  `TypeID` int(11) NOT NULL,
  `UploadTime` datetime NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('1',0,'logo_default.png','2017-04-06 09:00:00','a1.mp4','60','C++入门',0,1001,9,'2017-04-06 09:00:00'),('10',0,'logo_default.png','2017-04-06 18:00:00','a2.mp4','60','C语言课程设计',0,1019,12,'2017-04-06 09:00:00'),('11',0,'logo_default.png','2017-04-07 09:00:00','a3.mp4','90','iOS开发实例',0,1003,29,'2017-04-06 09:00:00'),('12',0,'logo_default.png','2017-04-07 10:00:00','a4.mp4','120','iOS图形化界面',0,1002,29,'2017-04-06 09:00:00'),('13',0,'logo_default.png','2017-04-07 11:00:00','a1.mp4','60','PHP实例教程',0,1004,10,'2017-04-06 09:00:00'),('14',0,'logo_default.png','2017-04-07 12:00:00','a2.mp4','90','C语言入门',0,1006,12,'2017-04-06 09:00:00'),('15',0,'logo_default.png','2017-04-07 13:00:00','a3.mp4','120','数据库从入门到精通',0,1008,41,'2017-04-06 09:00:00'),('16',0,'logo_default.png','2017-04-07 14:00:00','a4.mp4','150','C#从入门到精通',0,1010,13,'2017-04-06 10:00:00'),('17',0,'logo_default.png','2017-04-07 15:00:00','a1.mp4','120','html5简单设计',0,1012,27,'2017-04-06 09:00:00'),('18',0,'logo_default.png','2017-04-09 09:00:00','a2.mp4','90','html5入门',0,1014,27,'2017-04-06 09:00:00'),('19',0,'logo_default.png','2017-04-10 09:00:00','a3.mp4','60','html5控件实例',0,1016,27,'2017-04-06 09:00:00'),('2',0,'logo_default.png','2017-04-06 10:00:00','a4.mp4','90','C++精通',0,1003,9,'2017-04-06 09:00:00'),('20',0,'logo_default.png','2017-04-11 09:00:00','a1.mp4','90','html的Css教学',0,1018,27,'2017-04-06 09:00:00'),('21',0,'logo_default.png','2017-04-12 09:00:00','a2.mp4','90','htmlCss+div布局',0,1020,27,'2017-04-06 09:00:00'),('22',0,'logo_default.png','2017-04-13 09:00:00','a3.mp4','90','html5编程指南',0,1022,27,'2017-04-06 09:00:00'),('23',0,'logo_default.png','2017-04-14 09:00:00','a4.mp4','60','html5实战演练',0,1023,27,'2017-04-06 09:00:00'),('24',0,'logo_default.png','2017-04-16 09:00:00','a1.mp4','120','html5课程设计',0,1024,27,'2017-04-06 09:00:00'),('3',0,'logo_default.png','2017-04-06 11:00:00','a2.mp4','90','C++课程设计',0,1005,9,'2017-04-06 09:00:00'),('4',0,'logo_default.png','2017-04-06 12:00:00','a3.mp4','120','C++类与对象',0,1007,9,'2017-04-06 09:00:00'),('5',0,'logo_default.png','2017-04-06 13:00:00','a4.mp4','60','C++从入门到精通',0,1009,9,'2017-04-06 09:00:00'),('6',0,'logo_default.png','2017-04-06 14:00:00','a1.mp4','90','C++实践',0,1011,9,'2017-04-06 09:00:00'),('7',0,'logo_default.png','2017-04-06 15:00:00','a2.mp4','60','C++编程指南',0,1013,9,'2017-04-06 09:00:00'),('8',0,'logo_default.png','2017-04-06 16:00:00','a3.mp4','150','C++实战演练',0,1015,9,'2017-04-06 09:00:00'),('9',0,'logo_default.png','2017-04-06 17:00:00','a4.mp4','180','PHP入门',0,1017,10,'2017-04-06 09:00:00');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `note`
--

DROP TABLE IF EXISTS `note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `note` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(255) DEFAULT NULL,
  `NoteTime` datetime NOT NULL,
  `NoterID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `note`
--

LOCK TABLES `note` WRITE;
/*!40000 ALTER TABLE `note` DISABLE KEYS */;
INSERT INTO `note` VALUES (1,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:40:00','130708119'),(2,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:41:00','130708120'),(3,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:42:00','130708121'),(4,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:43:00','130708122'),(5,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:44:00','130708123'),(6,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:45:00','130708124'),(7,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:46:00','130708125'),(8,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:47:00','130708126'),(9,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:48:00','130708127'),(10,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:49:00','130708128'),(11,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:50:00','130708129'),(12,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:51:00','130708131'),(13,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:52:00','130708132'),(14,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:53:00','130708133'),(15,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:54:00','130708134'),(16,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:55:00','130708135'),(17,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:56:00','130708136'),(18,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:57:00','130708137'),(19,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:58:00','130708138'),(20,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-22 16:59:00','130708139'),(21,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-23 16:40:00','130708130'),(22,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-24 16:40:00','130708140'),(23,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-25 16:40:00','130708141'),(24,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-26 16:40:00','130708142'),(25,'激扬青春力量 培育法治人才 热衷“织网”势必自缚','2017-02-27 16:40:00','130708143');
/*!40000 ALTER TABLE `note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `ID` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Type` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `ID` varchar(255) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Age` int(11) NOT NULL,
  `CourseID` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `PhoneNumber` varchar(255) DEFAULT NULL,
  `PhotoUrl` varchar(255) DEFAULT NULL,
  `Sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('130708119','北京市海淀区西四环北路长青园二区14号楼101',22,'1','李明阳','1432','1','1','男'),('130708120','北京市海淀区西四环北路长青园二区14号楼102',35,'1','马孟岳','3255','1','1','男'),('130708121','北京市海淀区西四环北路长青园二区14号楼103',32,'1','张宇','325','1','1','男'),('130708122','北京市海淀区西四环北路长青园二区14号楼104',43,'1','张璐','632','1','1','男'),('130708123','北京市海淀区西四环北路长青园二区14号楼105',35,'1','郑少腾','3623','1','1','男'),('130708124','北京市海淀区西四环北路长青园二区14号楼106',12,'1','韩冰','32623','1','1','男'),('130708125','北京市海淀区西四环北路长青园二区14号楼107',15,'1','曹翠翠','42342','1','1','男'),('130708126','浙江传媒学院20楼223',22,'1','苗阳阳','3253','1','1','男'),('130708127','浙江传媒学院20楼224',15,'1','刘治平','3242','1','1','男'),('130708128','浙江传媒学院20楼225',16,'1','段亚红','5236','1','1','男'),('130708129','浙江传媒学院20楼226',12,'1','张悦','32632','1','1','女'),('130708130','浙江传媒学院20楼227',11,'1','许润泽','4324','1','1','女'),('130708131','浙江传媒学院20楼228',43,'1','邹莹莹','423','1','1','女'),('130708132','浙江传媒学院20楼211',42,'1','吴繁勇','23423','1','1','女'),('130708133','浙江传媒学院20楼212',45,'1','张玉琪','3252','1','1','女'),('130708134','浙江传媒学院20楼213',23,'1','李梦鸽','632','1','1','女'),('130708135','浙江传媒学院20楼214',26,'1','张飞','324','1','1','女'),('130708136','浙江传媒学院20楼215',28,'1','邢铁英','23623','1','1','女'),('130708137','浙江传媒学院20楼216',29,'1','高豆豆','3242','1','1','女'),('130708138','浙江传媒学院20楼217',31,'1','吴梦','4234','1','1','女'),('130708139','浙江传媒学院20楼218',32,'1','赵可','32423','1','1','女'),('130708140','浙江传媒学院20楼209',33,'1','徐建熠','3252','1','1','女'),('130708141','浙江传媒学院20楼208',35,'1','李晓霞','3253','1','1','女'),('130708142','浙江传媒学院20楼207',38,'1','耿盼','3242','1','1','女');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacher` (
  `ID` varchar(255) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Age` int(11) NOT NULL,
  `Introduction` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `PhoneNumber` varchar(255) DEFAULT NULL,
  `PhotoUrl` varchar(255) DEFAULT NULL,
  `Sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES ('1001','浙江传媒学院20楼110',21,'认真负责 兢兢业业','许昌昊','001','1','1','女'),('1002','浙江传媒学院20楼111',22,'认真负责 兢兢业业','康飒','002','1','1','女'),('1003','浙江传媒学院20楼112',23,'认真负责 兢兢业业','陈光娜','003','1','1','女'),('1004','浙江传媒学院20楼113',24,'认真负责 兢兢业业','王贺','004','1','1','女'),('1005','浙江传媒学院20楼114',32,'认真负责 兢兢业业','高媛','005','1','1','女'),('1006','浙江传媒学院20楼115',24,'认真负责 兢兢业业','陈帅','006','1','1','女'),('1007','浙江传媒学院20楼116',23,'认真负责 兢兢业业','王志光','007','1','1','女'),('1008','浙江传媒学院20楼117',14,'认真负责 兢兢业业','何晓佩','008','1','1','女'),('1009','浙江传媒学院20楼118',52,'工作努力 耐心热情','李孟顺','009','1','1','女'),('1010','浙江传媒学院20楼119',32,'工作努力 耐心热情','王俊新','010','1','1','男'),('1011','浙江传媒学院20楼120',42,'工作努力 耐心热情','魏宸','011','1','1','男'),('1012','浙江传媒学院20楼121',32,'工作努力 耐心热情','苗兴','012','1','1','男'),('1013','浙江传媒学院20楼122',12,'工作努力 耐心热情','吴海宁','013','1','1','男'),('1014','浙江传媒学院20楼123',53,'兢兢业业 工作努力','刘盼','014','1','1','男'),('1015','浙江传媒学院20楼124',64,'兢兢业业 工作努力','贺少鹏','015','1','1','男'),('1016','浙江传媒学院20楼125',42,'兢兢业业 工作努力','裴华鹏','016','1','1','男'),('1017','浙江传媒学院20楼126',37,'兢兢业业 工作努力','李明坤','017','1','1','男'),('1018','浙江传媒学院20楼127',38,'兢兢业业 工作努力','路文超','018','1','1','男'),('1019','浙江传媒学院20楼128',39,'兢兢业业 工作努力','宋彤彤','019','1','1','男'),('1020','浙江传媒学院20楼129',27,'兢兢业业 工作努力','胡晓玉','020','1','1','男'),('1021','浙江传媒学院20楼130',26,'兢兢业业 工作努力','姜越鹏','021','1','1','男'),('1022','浙江传媒学院20楼131',29,'兢兢业业 工作努力','李艳普','022','1','1','男');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-14 14:47:43
