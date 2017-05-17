-- MySQL dump 10.13  Distrib 5.7.18, for Win32 (AMD64)
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
  `Password` varchar(255) NOT NULL DEFAULT '000000',
  `Right` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('0001','Lost','123456',0);
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
  `Category` int(11) DEFAULT NULL,
  `CourseImgUrl` varchar(255) DEFAULT NULL,
  `CourseTime` datetime DEFAULT NULL,
  `CourseUrl` varchar(255) DEFAULT NULL,
  `Duration` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `StudentNumber` int(11) DEFAULT NULL,
  `TeacherID` int(11) DEFAULT NULL,
  `TypeID` int(11) DEFAULT NULL,
  `UploadTime` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('1',0,'1.jpg','2017-05-01 08:00:00','a1.mp4','120','SQL Server数据库教程',1,1001,42,'2017-04-10 07:00:00'),('10',0,'2.jpg','2017-05-10 08:00:00','a2.mp4','90','C#入门教程',3,1002,13,'2017-04-10 08:00:00'),('11',0,'3.jpg','2017-05-11 08:00:00','a3.mp4','90','Python机器学习应用',3,1001,16,'2017-04-10 09:00:00'),('12',0,'4.jpg','2017-05-12 08:00:00','a4.mp4','90','用Python玩转数据',3,1010,16,'2017-04-10 06:00:00'),('13',0,'5.jpg','2017-05-13 08:00:00','a5.mp4','90','C语言程序设计进阶',3,1017,12,'2017-04-10 10:00:00'),('14',0,'6.jpg','2017-05-14 08:00:00','a6.mp4','90','面向对象程序设计——Java语言',3,1001,8,'2017-04-10 11:00:00'),('15',0,'7.jpg','2017-05-15 08:00:00','a7.mp4','90','零基础学Java语言',3,1018,8,'2017-04-10 12:00:00'),('16',0,'8.jpg','2017-05-16 08:00:00','a8.mp4','90','C语言程序设计',3,1019,12,'2017-04-10 13:00:00'),('17',0,'9.jpg','2017-05-17 08:00:00','a9.mp4','90','Python科学计算三维可视化',3,1016,16,'2017-04-10 14:00:00'),('18',0,'10.jpg','2017-05-18 08:00:00','a10.mp4','90','Python数据分析与展示',3,1001,16,'2017-04-11 07:00:00'),('19',0,'1.jpg','2017-05-19 08:00:00','a1.mp4','120','软件测试与质量',3,1020,35,'2017-04-12 07:00:00'),('2',0,'2.jpg','2017-05-02 08:00:00','a2.mp4','120','c#程序设计',2,1010,13,'2017-04-13 07:00:00'),('20',0,'3.jpg','2017-05-20 08:00:00','a3.mp4','120','VisualBasic6.0程序设计',3,1010,18,'2017-04-14 07:00:00'),('21',0,'4.jpg','2017-05-21 08:00:00','a4.mp4','120','嗨翻艺术设计创业',3,1016,68,'2017-04-15 07:00:00'),('22',0,'5.jpg','2017-05-22 08:00:00','a5.mp4','120','人人爱设计（上）',3,1007,68,'2017-04-16 07:00:00'),('23',0,'6.jpg','2017-05-23 08:00:00','a6.mp4','90','风景园林景观设计原理',3,1001,59,'2017-04-17 07:00:00'),('24',0,'7.jpg','2017-05-24 08:00:00','a7.mp4','60','摄影基础',3,1009,59,'2017-04-18 07:00:00'),('25',0,'8.jpg','2017-05-25 08:00:00','a8.mp4','120','人人爱设计（下）',2,1006,59,'2017-04-19 07:00:00'),('26',0,'9.jpg','2017-05-26 08:00:00','a9.mp4','60','英语语法与写作',1,1001,99,'2017-04-20 07:00:00'),('27',0,'10.jpg','2017-05-27 08:00:00','a10.mp4','60','国际交流英语',0,1012,99,'2017-04-21 07:00:00'),('28',0,'1.jpg','2017-05-28 08:00:00','a1.mp4','60','新科学家英语：演讲与写作',0,1011,99,'2017-04-22 07:00:00'),('29',0,'2.jpg','2017-05-29 08:00:00','a2.mp4','90','大学英语过程写作',0,1007,99,'2017-04-23 07:00:00'),('3',0,'3.jpg','2017-05-03 08:00:00','a3.mp4','120','理解马克思',3,1009,107,'2017-04-24 07:00:00'),('30',0,'4.jpg','2017-05-30 08:00:00','a4.mp4','90','《新教伦理与资本主义精神》导读',0,1015,107,'2017-04-25 07:00:00'),('31',0,'5.jpg','2017-05-30 09:00:00','a5.mp4','90','篮球入门',0,1007,85,'2017-04-26 07:00:00'),('32',0,'6.jpg','2017-05-30 10:00:00','a6.mp4','90','篮球进阶',0,1010,85,'2017-04-27 07:00:00'),('33',0,'7.jpg','2017-05-30 11:00:00','a7.mp4','90','插花入门',0,1011,53,'2017-04-28 07:00:00'),('34',0,'8.jpg','2017-05-30 12:00:00','a8.mp4','120','果树除虫注意',0,1015,53,'2017-04-29 07:00:00'),('35',0,'9.jpg','2017-05-30 13:00:00','a9.mp4','120','挖掘机入门',0,1021,56,'2017-04-25 07:01:00'),('36',0,'10.jpg','2017-05-30 14:00:00','a10.mp4','120','飞机驾驶技术',0,1002,57,'2017-04-25 07:02:00'),('37',1,'1.jpg','2017-05-30 15:00:00','a1.mp4','150','川菜制作',0,1007,50,'2017-04-25 07:03:00'),('38',1,'2.jpg','2017-05-30 16:00:00','a2.mp4','150','杭帮菜入门',0,1014,50,'2017-04-25 07:04:00'),('39',1,'3.jpg','2017-05-30 17:00:00','a3.mp4','150','从0开始学厨艺',0,1009,50,'2017-04-25 07:05:00'),('4',0,'4.jpg','2017-05-04 08:00:00','a4.mp4','120','我的一百道菜式',3,1005,50,'2017-04-25 07:06:00'),('40',1,'5.jpg','2017-05-30 18:00:00','a5.mp4','150','考研英语1',0,1006,106,'2017-04-25 07:07:00'),('41',1,'6.jpg','2017-05-30 19:00:00','a6.mp4','150','考研英语2',0,1012,106,'2017-04-25 07:08:00'),('42',1,'7.jpg','2017-05-30 10:00:00','a7.mp4','150','考研英语3',0,1013,106,'2017-04-25 07:09:00'),('43',1,'8.jpg','2017-05-30 11:00:00','a8.mp4','180','言语理解1',0,1006,113,'2017-04-25 07:10:00'),('44',1,'9.jpg','2017-05-30 12:00:00','a9.mp4','180','言语理解2',0,1008,113,'2017-04-25 07:20:00'),('45',1,'10.jpg','2017-05-30 14:00:00','a10.mp4','180','言语理解3',0,1007,113,'2017-04-25 07:30:00'),('46',1,'1.jpg','2017-05-30 15:00:00','a1.mp4','180','钢琴入门',0,1022,118,'2017-04-25 07:40:00'),('47',1,'2.jpg','2017-05-30 07:00:00','a2.mp4','180','钢琴原理',0,1008,118,'2017-04-25 07:50:00'),('48',1,'3.jpg','2017-05-31 07:00:00','a3.mp4','180','吉他进阶',0,1021,121,'2017-04-25 08:50:00'),('49',1,'4.jpg','2017-05-31 08:00:00','a4.mp4','180','学吉他这件小事',0,1020,121,'2017-04-25 08:51:00'),('5',0,'5.jpg','2017-05-05 08:00:00','a5.mp4','120','吉他入门曲目',3,1004,121,'2017-04-25 08:52:00'),('50',1,'6.jpg','2017-05-31 09:00:00','a6.mp4','180','Java基础视频教程',0,1004,8,'2017-04-25 08:53:00'),('51',1,'7.jpg','2017-05-31 07:00:00','a7.mp4','180','Java进阶案例教程',0,1003,8,'2017-04-25 08:54:00'),('52',1,'8.jpg','2017-05-31 10:00:00','a8.mp4','120','Java实战案例课程',0,1019,8,'2017-04-25 08:55:00'),('53',1,'9.jpg','2017-05-31 11:00:00','a9.mp4','90','熊老师讲留学1',0,1002,99,'2017-04-25 08:56:00'),('54',1,'10.jpg','2017-05-31 12:00:00','a10.mp4','60','熊老师讲留学2',0,1018,99,'2017-04-25 08:57:00'),('55',1,'1.jpg','2017-05-31 13:00:00','a1.mp4','150','熊老师讲留学3',0,1004,99,'2017-04-25 08:58:00'),('56',1,'2.jpg','2017-05-31 14:00:00','a2.mp4','150','王老师讲散打1',0,1017,96,'2017-04-25 08:59:00'),('57',1,'3.jpg','2017-05-31 15:00:00','a3.mp4','150','王老师讲散打2',0,1003,96,'2017-04-25 08:41:00'),('58',1,'4.jpg','2017-05-31 07:00:00','a4.mp4','150','王老师讲散打3',0,1008,96,'2017-04-25 08:42:00'),('59',1,'5.jpg','2017-05-31 07:00:00','a5.mp4','150','李老师琵琶课程1',0,1005,119,'2017-04-25 08:43:00'),('6',0,'6.jpg','2017-05-06 08:00:00','a6.mp4','120','李老师琵琶课程2',3,1016,119,'2017-04-25 08:44:00'),('60',1,'7.jpg','2017-05-31 08:00:00','a7.mp4','150','李老师琵琶课程3',0,1002,119,'2017-04-25 08:45:00'),('61',1,'8.jpg','2017-05-31 09:00:00','a8.mp4','150','祝老师网络交互设计1',0,1015,75,'2017-04-25 08:46:00'),('62',1,'9.jpg','2017-05-31 10:00:00','a9.mp4','150','祝老师网络交互设计2',0,1003,75,'2017-04-25 08:47:00'),('63',1,'10.jpg','2017-05-31 11:00:00','a10.mp4','150','祝老师网络交互设计3',0,1008,75,'2017-04-25 08:48:00'),('7',0,'1.jpg','2017-05-07 08:00:00','a1.mp4','120','陈老师美容美发1',3,1002,51,'2017-04-25 08:49:00'),('8',0,'2.jpg','2017-05-08 08:00:00','a2.mp4','120','陈老师美容美发2',3,1003,51,'2017-04-25 08:31:00'),('9',0,'3.jpg','2017-05-09 08:00:00','a3.mp4','90','陈老师美容美发3',3,1014,51,'2017-04-25 08:32:00');
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
  `NoteTime` datetime DEFAULT NULL,
  `NoterID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `note`
--

LOCK TABLES `note` WRITE;
/*!40000 ALTER TABLE `note` DISABLE KEYS */;
INSERT INTO `note` VALUES (1,'许昌昊老师上课很认真，很耐心友善，好评','2017-05-16 21:00:00','130708119'),(2,'Sublime Text 3弹出no build system  with variant run, 请问怎么解决？','2017-05-17 21:00:00','130708119'),(3,'有没有类似于3Dmax的软件','2017-05-18 21:00:00','130708119'),(4,'我想在Excel中输入条形码后，后面的商品名称和规格自动录入，而数量和生产日期手工录入，请赐教，万分感谢！','2017-05-19 21:00:00','130708120'),(5,'用VLOOKUP函数、用VBA代码都很简单，前提是得先有一个商品列表，储存着所有条形码及其对应的商品名称和规格等信息。','2017-05-20 21:00:00','130708121'),(6,'ps可以制作动画作品吗？','2017-05-21 21:00:00','130708122'),(7,'普通打印机可以用a3的纸打印出彩图吗？','2017-05-22 21:00:00','130708123'),(8,'新人来报个到，0基础学习平面设计，学友们多多关照','2017-05-23 21:00:00','130708125'),(9,'我准备报名PHP，但不知道好不好找工作','2017-05-24 21:00:00','130708120'),(10,'AE 时间轴不能任意拉动','2017-05-25 21:00:00','130708134'),(11,'cad如何快速建模','2017-05-26 21:00:00','130708132'),(12,'proe是用来做什么的？','2017-05-27 21:00:00','130708133'),(13,'手绘视频的软件VideoScribe打不开？','2017-05-28 21:00:00','130708135'),(14,'请教：ArtCAM2017矢量描线如何撤销当前点？','2017-05-16 22:00:00','130708137'),(15,'PR cc字幕制作滚动条不出现怎么回事','2017-05-16 23:00:00','130708140'),(16,'我在安装SketchBook Pro 2016 中文版软件时，遇到注册机补丁失败，数显图片中第二张显示，为什么不能休正补丁呢  ','2017-05-16 21:10:00','130708140'),(17,'如何关闭Excel2013的power view','2017-05-16 21:20:00','130708121'),(18,'求大家在线回答！AE的钢笔工具中的Alt的键为什么不会消除钢笔的锚点呢？','2017-05-16 21:30:00','130708122'),(19,'HTML5 下拉导航栏问题','2017-05-16 21:40:00','130708120'),(20,'啥我的360图片的网页显示不出来啊，显示的是白屏，求大神讲解','2017-05-16 21:50:00','130708138'),(21,'北京精雕软件里面填好颜色，保存后，再打开颜色就不见了是怎么回事','2017-05-16 21:51:00','130708139'),(22,'fulash对电脑有危害吗','2017-05-16 21:52:00','130708140'),(23,'我安装vray1.5安在3D8.0版本中，为什么老是目录已存在，安不上？','2017-05-16 21:53:00','130708119130708131'),(24,'在PS路径10.6凸出滤镜中，做车轮动态效果时，如果选择智能滤镜-模糊-径向模糊为什么得出的效果和单纯滤镜-模糊-径向模糊不同','2017-05-16 21:54:00','130708133');
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
  `Age` int(11) DEFAULT NULL,
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
INSERT INTO `student` VALUES ('130708119','北京市海淀区西四环北路长青园二区14号',22,'1,2,3','陈辰','123456','13777801167','11.jpg','男'),('130708120','北京市海淀区西四环北路长青园二区15号',35,'2,3,4','马孟岳','000000','13777801168','11.jpg','男'),('130708121','北京市海淀区西四环北路长青园二区16号',32,'3,4,5','张宇','000000','13777801169','11.jpg','男'),('130708122','北京市海淀区西四环北路长青园二区17号',43,'4,5,6','张璐','000000','13777801170','11.jpg','男'),('130708123','北京市海淀区西四环北路长青园二区18号',35,'5,6,7','郑少腾','000000','13777801171','11.jpg','男'),('130708124','北京市海淀区西四环北路长青园二区19号',12,'6,7,8','韩冰','000000','13777801172','11.jpg','男'),('130708125','北京市海淀区西四环北路长青园二区20号',15,'7,8,9','曹翠翠','000000','13777801173','11.jpg','男'),('130708126','北京市海淀区西四环北路长青园二区21号',22,'8,9,10','苗阳阳','000000','13777801174','11.jpg','男'),('130708127','北京市海淀区西四环北路长青园二区22号',15,'9,10,11','刘治平','000000','13777801175','11.jpg','男'),('130708128','北京市海淀区西四环北路长青园二区23号',16,'10,11,12','段亚红','000000','13777801176','11.jpg','男'),('130708129','北京市海淀区西四环北路长青园二区24号',12,'11,12,13','张悦','000000','13777801177','11.jpg','女'),('130708130','北京市海淀区西四环北路长青园二区25号',11,'12,13,14','许润泽','000000','13777801178','11.jpg','女'),('130708131','北京市海淀区西四环北路长青园二区26号',43,'13,14,15','邹莹莹','000000','13777801179','11.jpg','女'),('130708132','北京市海淀区西四环北路长青园二区27号',42,'14,15,16','吴繁勇','000000','13777801180','11.jpg','女'),('130708133','北京市海淀区西四环北路长青园二区28号',45,'15,16,17','张玉琪','000000','13777801181','11.jpg','女'),('130708134','北京市海淀区西四环北路长青园二区29号',23,'16,17,18','李梦鸽','000000','13777801182','11.jpg','女'),('130708135','北京市海淀区西四环北路长青园二区30号',26,'17,18,19','张飞','000000','13777801183','11.jpg','女'),('130708136','北京市海淀区西四环北路长青园二区31号',28,'18,19,20','邢铁英','000000','13777801184','11.jpg','女'),('130708137','北京市海淀区西四环北路长青园二区32号',29,'19,20,21','高豆豆','000000','13777801185','11.jpg','女'),('130708138','北京市海淀区西四环北路长青园二区33号',31,'20,21,22','吴梦','000000','13777801186','11.jpg','女'),('130708139','北京市海淀区西四环北路长青园二区34号',32,'21,22,23','赵可','000000','13777801187','11.jpg','女'),('130708140','北京市海淀区西四环北路长青园二区35号',33,'22,23,24','徐建熠','000000','13777801188','11.jpg','女'),('130708141','北京市海淀区西四环北路长青园二区36号',35,'23,24,25','李晓霞','000000','13777801189','11.jpg','女'),('130708142','北京市海淀区西四环北路长青园二区37号',38,'24,25,26','耿盼','000000','13777801190','11.jpg','女');
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
  `Age` int(11) DEFAULT NULL,
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
INSERT INTO `teacher` VALUES ('1001','浙江传媒学院20楼110',21,'性格开朗、为人诚恳','许昌昊','123456','13777841168','12.jpg','女'),('1002','浙江传媒学院20楼111',22,'活泼开朗、乐观向上','康飒','000000','13777841169','12.jpg','女'),('1003','浙江传媒学院20楼112',23,'认真负责、坚毅不拔','陈光娜','000000','13777841170','12.jpg','女'),('1004','浙江传媒学院20楼113',24,'性格热情开朗，待人友好','王贺','000000','13777841171','12.jpg','女'),('1005','浙江传媒学院20楼114',32,'有耐心。具有亲和力，平易近人，善于与人沟通。','高媛','000000','13777841172','12.jpg','女'),('1006','浙江传媒学院20楼115',24,'工作严谨踏实，认真负责','陈帅','000000','13777841173','12.jpg','女'),('1007','浙江传媒学院20楼116',23,'有良好的思想品德和职业素质','王志光','000000','13777841174','12.jpg','女'),('1008','浙江传媒学院20楼117',14,'热心、自信、上进心强，工作认真负责','何晓佩','000000','13777841175','12.jpg','女'),('1009','浙江传媒学院20楼118',52,'积极思考，力求在工作','李孟顺','000000','13777841176','12.jpg','女'),('1010','浙江传媒学院20楼119',32,'乐于学习、敢于创新','王俊新','000000','13777841177','12.jpg','男'),('1011','浙江传媒学院20楼120',42,'为人踏实肯干，并能与他人迅速结交，融洽相处','魏宸','000000','13777841178','12.jpg','男'),('1012','浙江传媒学院20楼121',32,'坚毅不拔、吃苦耐劳、勇于迎接新挑战','苗兴','000000','13777841179','12.jpg','男'),('1013','浙江传媒学院20楼122',12,'为人诚恳、乐观向上','吴海宁','000000','13777841180','12.jpg','男'),('1014','浙江传媒学院20楼123',53,'拥有较强的组织能力和适应能力','刘盼','000000','13777841181','12.jpg','男'),('1015','浙江传媒学院20楼124',64,'对工作认真负责，一丝不苟，并且有良好的自学能力','贺少鹏','000000','13777841182','12.jpg','男'),('1016','浙江传媒学院20楼125',42,' 时间观念强，诚实守信、塌实肯干、肯吃苦、做事细心','裴华鹏','000000','13777841183','12.jpg','男'),('1017','浙江传媒学院20楼126',37,' 重视自身建设，努力提高业务水平','李明坤','000000','13777841184','12.jpg','男'),('1018','浙江传媒学院20楼127',38,'性格开朗，待人热情诚恳，事业心强','路文超','000000','13777841185','12.jpg','男'),('1019','浙江传媒学院20楼128',39,'具有亲和力，平易近人，善于与人沟通','宋彤彤','000000','13777841186','12.jpg','男'),('1020','浙江传媒学院20楼129',27,'具备出色的学习能力并且乐于学习、敢于创新，不断追求卓越','胡晓玉','000000','13777841187','12.jpg','男'),('1021','浙江传媒学院20楼130',26,'爱岗敬业，关心集体，乐于助人','姜越鹏','000000','13777841188','12.jpg','男'),('1022','浙江传媒学院20楼131',29,'乐于学习、敢于创新，不断追求卓越','李艳普','000000','13777841189','12.jpg','男');
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

-- Dump completed on 2017-05-17  0:03:17
