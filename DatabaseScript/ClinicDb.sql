USE [master]
GO
/****** Object:  Database [ClinicDb]    Script Date: 4/22/2021 11:11:17 AM ******/
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
/****** Object:  Table [dbo].[Abilities]    Script Date: 4/22/2021 11:11:18 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Abilities](
	[AbilityId] [int] NOT NULL,
	[AbilityName] [nvarchar](50) NOT NULL,
	[Url] [nvarchar](50) NULL,
 CONSTRAINT [PK_Abilities] PRIMARY KEY CLUSTERED 
(
	[AbilityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Allergies]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Diagnoses]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Medicines]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Navbar]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[PatientHistory]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[PatientHistoryAllergies]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[PatientHistoryDiagnoses]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[PatientHistoryMedicines]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[PatientHistorySigns]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[PatientHistorySymptoms]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Roles]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Roles_Abilities]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Signs]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Symptoms]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Users]    Script Date: 4/22/2021 11:11:18 AM ******/
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
/****** Object:  Table [dbo].[Users_Roles]    Script Date: 4/22/2021 11:11:18 AM ******/
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
