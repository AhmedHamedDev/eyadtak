USE [master]
GO
/****** Object:  Database [ClinicDb]    Script Date: 4/7/2021 5:38:16 PM ******/
CREATE DATABASE [ClinicDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ClinicDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER02\MSSQL\DATA\ClinicDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ClinicDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER02\MSSQL\DATA\ClinicDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [ClinicDb] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ClinicDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ClinicDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ClinicDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ClinicDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ClinicDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ClinicDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [ClinicDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ClinicDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ClinicDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ClinicDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ClinicDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ClinicDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ClinicDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ClinicDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ClinicDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ClinicDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ClinicDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ClinicDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ClinicDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ClinicDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ClinicDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ClinicDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ClinicDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ClinicDb] SET RECOVERY FULL 
GO
ALTER DATABASE [ClinicDb] SET  MULTI_USER 
GO
ALTER DATABASE [ClinicDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ClinicDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ClinicDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ClinicDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ClinicDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ClinicDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ClinicDb', N'ON'
GO
ALTER DATABASE [ClinicDb] SET QUERY_STORE = OFF
GO
USE [ClinicDb]
GO
/****** Object:  Table [dbo].[Abilities]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Abilities](
	[AbilityId] [int] IDENTITY(1,1) NOT NULL,
	[AbilityName] [nvarchar](50) NOT NULL,
	[Url] [nvarchar](50) NULL,
 CONSTRAINT [PK_Abilities] PRIMARY KEY CLUSTERED 
(
	[AbilityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Allergies]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Allergies](
	[AllergieId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[NumberOfUse] [int] NOT NULL,
 CONSTRAINT [PK_Allergies] PRIMARY KEY CLUSTERED 
(
	[AllergieId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Diagnoses]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Diagnoses](
	[DiagnosisId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[NumberOfUse] [int] NOT NULL,
 CONSTRAINT [PK_Diagnoses] PRIMARY KEY CLUSTERED 
(
	[DiagnosisId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Medicines]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Medicines](
	[MedicineId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[NumberOfUse] [int] NOT NULL,
 CONSTRAINT [PK_Medicines] PRIMARY KEY CLUSTERED 
(
	[MedicineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Navbar]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Navbar](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Icon] [nvarchar](100) NULL,
	[LevelInMenu] [int] NOT NULL,
	[ParentId] [int] NULL,
	[AbilityId] [int] NULL,
	[Order] [int] NULL,
 CONSTRAINT [PK_Navbar] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientHistory]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientHistory](
	[PatientHistoryId] [int] IDENTITY(1,1) NOT NULL,
	[Note] [nvarchar](500) NULL,
	[CheifComplaint] [nvarchar](500) NULL,
	[InsertDate] [datetime] NULL,
	[PatientId] [int] NOT NULL,
 CONSTRAINT [PK_PatientHistory] PRIMARY KEY CLUSTERED 
(
	[PatientHistoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientHistoryAllergies]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientHistoryAllergies](
	[PatientHistoryId] [int] NOT NULL,
	[AllergieId] [int] NOT NULL,
	[InsertTime] [datetime] NOT NULL,
 CONSTRAINT [PK_PatientHistoryAllergies] PRIMARY KEY CLUSTERED 
(
	[PatientHistoryId] ASC,
	[AllergieId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientHistoryDiagnoses]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientHistoryDiagnoses](
	[PatientHistoryId] [int] NOT NULL,
	[DiagnosisId] [int] NOT NULL,
	[InsertTime] [datetime] NOT NULL,
 CONSTRAINT [PK_PatientHistoryDiagnoses] PRIMARY KEY CLUSTERED 
(
	[PatientHistoryId] ASC,
	[DiagnosisId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientHistoryMedicines]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientHistoryMedicines](
	[PatientHistoryId] [int] NOT NULL,
	[MedicineId] [int] NOT NULL,
	[InsertTime] [datetime] NOT NULL,
 CONSTRAINT [PK_PatientHistoryMedicines] PRIMARY KEY CLUSTERED 
(
	[PatientHistoryId] ASC,
	[MedicineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientHistorySigns]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientHistorySigns](
	[PatientHistoryId] [int] NOT NULL,
	[SignId] [int] NOT NULL,
	[InsertTime] [datetime] NOT NULL,
 CONSTRAINT [PK_PatientHistorySigns] PRIMARY KEY CLUSTERED 
(
	[PatientHistoryId] ASC,
	[SignId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientHistorySymptoms]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientHistorySymptoms](
	[PatientHistoryId] [int] NOT NULL,
	[SymptomId] [int] NOT NULL,
	[InsertTime] [datetime] NOT NULL,
 CONSTRAINT [PK_PatientHistorySymptoms] PRIMARY KEY CLUSTERED 
(
	[PatientHistoryId] ASC,
	[SymptomId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles_Abilities]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles_Abilities](
	[RoleId] [int] NOT NULL,
	[AbilityId] [int] NOT NULL,
 CONSTRAINT [PK_Roles_Abilities] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC,
	[AbilityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Signs]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Signs](
	[SignId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[NumberOfUse] [int] NOT NULL,
 CONSTRAINT [PK_Signs] PRIMARY KEY CLUSTERED 
(
	[SignId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Symptoms]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Symptoms](
	[SymptomId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[NumberOfUse] [int] NOT NULL,
 CONSTRAINT [PK_Symptoms] PRIMARY KEY CLUSTERED 
(
	[SymptomId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](255) NOT NULL,
	[UserEmail] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Active] [bit] NOT NULL,
	[RegisterDate] [datetime] NOT NULL,
	[RecoveryCode] [int] NOT NULL,
	[PhoneNumber] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users_Roles]    Script Date: 4/7/2021 5:38:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users_Roles](
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_Users_Roles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Abilities] ON 

INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (1, N'Logout', N'/Account/Logout')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (2, N'Change Password', N'/Account/ChangePassword')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (3, N'Get Roles', N'/Roles/GetRoles')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (4, N'Get Role', N'/Roles/GetRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (5, N'Add Role', N'/Roles/AddRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (6, N'Delete Role', N'/Roles/DeleteRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (7, N'Update Role', N'/Roles/UpdateRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (8, N'Get User Roles', N'/Admin/GetUserRoles')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (9, N'Update User Roles', N'/Admin/UpdateUserRoles')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (1002, N'Home', N'/Home/Sub1')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (1003, N'Home', N'/Home/Sub2')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (1004, N'About', N'/About/Sub1')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (1005, N'About', N'/About/Sub2')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (1006, N'About', N'/About/sub3')
SET IDENTITY_INSERT [dbo].[Abilities] OFF
GO
SET IDENTITY_INSERT [dbo].[Navbar] ON 

INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (2, N'Home', N'fa fa-user', 0, NULL, NULL, 2)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (3, N'About', N'fa fa-user', 0, NULL, NULL, 1)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (4, N'Home sub 1', N'fa fa-user', 1, 2, 1002, 2)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (5, N'Home sub 2', N'fa fa-user', 1, 2, 1003, 1)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (6, N'About sub 1', N'fa fa-user', 1, 3, 1004, 3)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (7, N'About sub 2', N'fa fa-user', 1, 3, 1005, 2)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (8, N'About sub 3', N'fa fa-user', 1, 3, 1006, 1)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (9, N'Contact', N'fa fa-user', 0, NULL, NULL, 3)
SET IDENTITY_INSERT [dbo].[Navbar] OFF
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (1, N'Admin')
INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (2, N'Doctor')
INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (3, N'Patient')
INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (4, N'Clinic Center')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 1)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 2)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 3)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 4)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 5)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 6)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 7)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 8)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 9)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (2, 1)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (2, 2)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (2, 1002)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (2, 1004)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (2, 1006)
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserId], [UserName], [UserEmail], [Password], [Active], [RegisterDate], [RecoveryCode], [PhoneNumber]) VALUES (1003, N'Ahmed Hamed', N'ahmedhamed121212@yahoo.com', N'5o7ZGyME7ftMcjcN89HPetcojZqfXRVQdg6FXEB4HBw+mJZYEySbH3NFQQLVKx1D', 1, CAST(N'2021-03-23T21:06:37.580' AS DateTime), -1, N'0201145226681')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
INSERT [dbo].[Users_Roles] ([UserId], [RoleId]) VALUES (1003, 2)
GO
ALTER TABLE [dbo].[Navbar]  WITH CHECK ADD  CONSTRAINT [FK_Navbar_Abilities] FOREIGN KEY([AbilityId])
REFERENCES [dbo].[Abilities] ([AbilityId])
GO
ALTER TABLE [dbo].[Navbar] CHECK CONSTRAINT [FK_Navbar_Abilities]
GO
ALTER TABLE [dbo].[Navbar]  WITH CHECK ADD  CONSTRAINT [FK_Navbar_Navbar] FOREIGN KEY([ParentId])
REFERENCES [dbo].[Navbar] ([Id])
GO
ALTER TABLE [dbo].[Navbar] CHECK CONSTRAINT [FK_Navbar_Navbar]
GO
ALTER TABLE [dbo].[PatientHistory]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistory_Users] FOREIGN KEY([PatientId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[PatientHistory] CHECK CONSTRAINT [FK_PatientHistory_Users]
GO
ALTER TABLE [dbo].[PatientHistoryAllergies]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistoryAllergies_Allergies] FOREIGN KEY([AllergieId])
REFERENCES [dbo].[Allergies] ([AllergieId])
GO
ALTER TABLE [dbo].[PatientHistoryAllergies] CHECK CONSTRAINT [FK_PatientHistoryAllergies_Allergies]
GO
ALTER TABLE [dbo].[PatientHistoryAllergies]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistoryAllergies_PatientHistory] FOREIGN KEY([PatientHistoryId])
REFERENCES [dbo].[PatientHistory] ([PatientHistoryId])
GO
ALTER TABLE [dbo].[PatientHistoryAllergies] CHECK CONSTRAINT [FK_PatientHistoryAllergies_PatientHistory]
GO
ALTER TABLE [dbo].[PatientHistoryDiagnoses]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistoryDiagnoses_Diagnoses] FOREIGN KEY([DiagnosisId])
REFERENCES [dbo].[Diagnoses] ([DiagnosisId])
GO
ALTER TABLE [dbo].[PatientHistoryDiagnoses] CHECK CONSTRAINT [FK_PatientHistoryDiagnoses_Diagnoses]
GO
ALTER TABLE [dbo].[PatientHistoryDiagnoses]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistoryDiagnoses_PatientHistoryDiagnoses] FOREIGN KEY([PatientHistoryId])
REFERENCES [dbo].[PatientHistory] ([PatientHistoryId])
GO
ALTER TABLE [dbo].[PatientHistoryDiagnoses] CHECK CONSTRAINT [FK_PatientHistoryDiagnoses_PatientHistoryDiagnoses]
GO
ALTER TABLE [dbo].[PatientHistoryMedicines]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistoryMedicines_Medicines] FOREIGN KEY([MedicineId])
REFERENCES [dbo].[Medicines] ([MedicineId])
GO
ALTER TABLE [dbo].[PatientHistoryMedicines] CHECK CONSTRAINT [FK_PatientHistoryMedicines_Medicines]
GO
ALTER TABLE [dbo].[PatientHistoryMedicines]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistoryMedicines_PatientHistory] FOREIGN KEY([PatientHistoryId])
REFERENCES [dbo].[PatientHistory] ([PatientHistoryId])
GO
ALTER TABLE [dbo].[PatientHistoryMedicines] CHECK CONSTRAINT [FK_PatientHistoryMedicines_PatientHistory]
GO
ALTER TABLE [dbo].[PatientHistorySigns]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistorySigns_PatientHistory] FOREIGN KEY([PatientHistoryId])
REFERENCES [dbo].[PatientHistory] ([PatientHistoryId])
GO
ALTER TABLE [dbo].[PatientHistorySigns] CHECK CONSTRAINT [FK_PatientHistorySigns_PatientHistory]
GO
ALTER TABLE [dbo].[PatientHistorySigns]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistorySigns_PatientHistorySigns] FOREIGN KEY([SignId])
REFERENCES [dbo].[Signs] ([SignId])
GO
ALTER TABLE [dbo].[PatientHistorySigns] CHECK CONSTRAINT [FK_PatientHistorySigns_PatientHistorySigns]
GO
ALTER TABLE [dbo].[PatientHistorySymptoms]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistorySymptoms_PatientHistory] FOREIGN KEY([PatientHistoryId])
REFERENCES [dbo].[PatientHistory] ([PatientHistoryId])
GO
ALTER TABLE [dbo].[PatientHistorySymptoms] CHECK CONSTRAINT [FK_PatientHistorySymptoms_PatientHistory]
GO
ALTER TABLE [dbo].[PatientHistorySymptoms]  WITH CHECK ADD  CONSTRAINT [FK_PatientHistorySymptoms_Symptoms] FOREIGN KEY([SymptomId])
REFERENCES [dbo].[Symptoms] ([SymptomId])
GO
ALTER TABLE [dbo].[PatientHistorySymptoms] CHECK CONSTRAINT [FK_PatientHistorySymptoms_Symptoms]
GO
ALTER TABLE [dbo].[Roles_Abilities]  WITH CHECK ADD  CONSTRAINT [FK_Roles_Abilities_Abilities] FOREIGN KEY([AbilityId])
REFERENCES [dbo].[Abilities] ([AbilityId])
GO
ALTER TABLE [dbo].[Roles_Abilities] CHECK CONSTRAINT [FK_Roles_Abilities_Abilities]
GO
ALTER TABLE [dbo].[Roles_Abilities]  WITH CHECK ADD  CONSTRAINT [FK_Roles_Abilities_Roles] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[Roles_Abilities] CHECK CONSTRAINT [FK_Roles_Abilities_Roles]
GO
ALTER TABLE [dbo].[Users_Roles]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_Roles] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[Users_Roles] CHECK CONSTRAINT [FK_Users_Roles_Roles]
GO
ALTER TABLE [dbo].[Users_Roles]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Users_Roles] CHECK CONSTRAINT [FK_Users_Roles_Users]
GO
USE [master]
GO
ALTER DATABASE [ClinicDb] SET  READ_WRITE 
GO
