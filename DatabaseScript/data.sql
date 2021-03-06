USE [ClinicDb]
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (1, N'Admin')
INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (2, N'Doctor')
INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (3, N'Patient')
INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (4, N'Clinic Center')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (1, N'Logout', N'/Account/Logout')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (2, N'Change Password', N'/Account/ChangePassword')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (3, N'Get Roles', N'/Roles/GetRoles')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (4, N'Get Role', N'/Roles/GetRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (5, N'Add Role', N'/Roles/AddRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (6, N'Delete Role', N'/Roles/DeleteRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (7, N'Update Role', N'/Roles/UpdateRole')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (8, N'Get User Roles', N'/Admin/GetUserRoles')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (9, N'Update User Roles', N'/Admin/UpdateUserRoles')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (10, N'Get Patient Info', N'/EMR/GetPatientInfo')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (11, N'Get Patient History Notes', N'/EMR/GetPatientHistoryNotes')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (12, N'Get Patient History Chief Complaints', N'/EMR/GetPatientHistoryChiefComplaints')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (13, N'Save Patient History', N'/EMR/SavePatientHistory')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (14, N'Get Allergies', N'/Allergies/GetAllergies')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (15, N'Get Patient Allergies', N'/Allergies/GetPatientAllergies')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (16, N'Get Diagnoses', N'/Diagnoses/GetDiagnoses')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (17, N'Get Patient Diagnoses', N'/Diagnoses/GetPatientDiagnoses')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (18, N'Get Signs', N'/Signs/GetSigns')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (19, N'Get Patient Signs', N'/Signs/GetPatientSigns')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (20, N'Get Symptoms', N'/Symptoms/GetSymptoms')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (21, N'Get Patient Symptoms', N'/Symptoms/GetPatientSymptoms')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (22, N'Get Medicines', N'/Medicines/GetMedicines')
INSERT [dbo].[Abilities] ([AbilityId], [AbilityName], [Url]) VALUES (23, N'Get Patient Medicines', N'/Medicines/GetPatientMedicines')
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
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 10)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 11)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 12)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 13)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 14)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 15)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 16)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 17)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 18)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 19)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 20)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 21)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 22)
INSERT [dbo].[Roles_Abilities] ([RoleId], [AbilityId]) VALUES (1, 23)
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserId], [UserName], [UserEmail], [Password], [Active], [RegisterDate], [RecoveryCode], [PhoneNumber]) VALUES (1003, N'Ahmed Hamed', N'ahmed@yahoo.com', N'5o7ZGyME7ftMcjcN89HPetcojZqfXRVQdg6FXEB4HBw+mJZYEySbH3NFQQLVKx1D', 1, CAST(N'2021-03-23T21:06:37.580' AS DateTime), -1, N'0201145226681')
INSERT [dbo].[Users] ([UserId], [UserName], [UserEmail], [Password], [Active], [RegisterDate], [RecoveryCode], [PhoneNumber]) VALUES (1004, N'Mohamed Bayomi', N'patient@yahoo.com', N'5o7ZGyME7ftMcjcN89HPetcojZqfXRVQdg6FXEB4HBw+mJZYEySbH3NFQQLVKx1D', 1, CAST(N'2021-03-23T21:06:37.580' AS DateTime), -1, N'0201145226681')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
INSERT [dbo].[Users_Roles] ([UserId], [RoleId]) VALUES (1003, 1)
INSERT [dbo].[Users_Roles] ([UserId], [RoleId]) VALUES (1004, 3)
GO
SET IDENTITY_INSERT [dbo].[PatientHistory] ON 

INSERT [dbo].[PatientHistory] ([PatientHistoryId], [Note], [CheifComplaint], [InsertDate], [PatientId]) VALUES (1, N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 1.', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 1.', CAST(N'2021-03-23T21:06:37.580' AS DateTime), 1004)
INSERT [dbo].[PatientHistory] ([PatientHistoryId], [Note], [CheifComplaint], [InsertDate], [PatientId]) VALUES (2, N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 2.', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 2.', CAST(N'2021-03-23T21:06:37.580' AS DateTime), 1004)
INSERT [dbo].[PatientHistory] ([PatientHistoryId], [Note], [CheifComplaint], [InsertDate], [PatientId]) VALUES (3, N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 3.', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 3.', CAST(N'2020-05-23T21:06:37.580' AS DateTime), 1004)
INSERT [dbo].[PatientHistory] ([PatientHistoryId], [Note], [CheifComplaint], [InsertDate], [PatientId]) VALUES (4, N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 4.', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 4.', CAST(N'2020-06-23T21:06:37.580' AS DateTime), 1004)
INSERT [dbo].[PatientHistory] ([PatientHistoryId], [Note], [CheifComplaint], [InsertDate], [PatientId]) VALUES (5, N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 5.', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 5.', CAST(N'2020-07-23T21:06:37.580' AS DateTime), 1004)
INSERT [dbo].[PatientHistory] ([PatientHistoryId], [Note], [CheifComplaint], [InsertDate], [PatientId]) VALUES (16, N'this is new note', N'this is new note', CAST(N'2021-04-17T17:39:07.403' AS DateTime), 1004)
SET IDENTITY_INSERT [dbo].[PatientHistory] OFF
GO
SET IDENTITY_INSERT [dbo].[Signs] ON 

INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (1, N'Wheezing', 12)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (2, N'Nausea', 11)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (3, N'Vomiting', 8)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (4, N'Diarrhea', 8)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (5, N'Fainting', 6)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (6, N'Wheezing 1', 6)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (7, N'Nausea 1', 5)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (8, N'Vomiting 1', 5)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (9, N'Diarrhea 1', 4)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (10, N'Fainting 1', 4)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (11, N'Test Symptom 5', 5)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (12, N'Test Symptom 4', 4)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (13, N'Test Symptom 3', 3)
INSERT [dbo].[Signs] ([SignId], [Name], [NumberOfUse]) VALUES (17, N'ahmed', 1)
SET IDENTITY_INSERT [dbo].[Signs] OFF
GO
INSERT [dbo].[PatientHistorySigns] ([PatientHistoryId], [SignId], [InsertTime]) VALUES (16, 1, CAST(N'2021-04-17T17:39:07.417' AS DateTime))
INSERT [dbo].[PatientHistorySigns] ([PatientHistoryId], [SignId], [InsertTime]) VALUES (16, 2, CAST(N'2021-04-17T17:39:07.417' AS DateTime))
INSERT [dbo].[PatientHistorySigns] ([PatientHistoryId], [SignId], [InsertTime]) VALUES (16, 17, CAST(N'2021-04-17T17:39:07.417' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Symptoms] ON 

INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (1, N'Wheezing', 11)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (2, N'Shortness of breath
', 11)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (3, N'Throat and mouth swelling
', 9)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (4, N'Nausea', 9)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (5, N'Vomiting', 8)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (6, N'Diarrhea', 8)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (7, N'Cramping abdominal pain
', 7)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (8, N'Fall in blood pressure
', 7)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (9, N'Fainting', 6)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (10, N'Wheezing 1', 6)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (15, N'Nausea 1', 5)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (16, N'Vomiting 1', 5)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (17, N'Diarrhea 1', 4)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (22, N'Fainting 1', 4)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (27, N'Cramping abdominal pain
 1', 3)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (29, N'Fall in blood pressure
 1', 3)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (30, N'Throat and mouth swelling
 1', 0)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (31, N'Shortness of breath
 1', 0)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (32, N'Test Symptom 5', 5)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (33, N'Test Symptom 4', 4)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (34, N'Test Symptom 3', 3)
INSERT [dbo].[Symptoms] ([SymptomId], [Name], [NumberOfUse]) VALUES (38, N'ahmed', 1)
SET IDENTITY_INSERT [dbo].[Symptoms] OFF
GO
INSERT [dbo].[PatientHistorySymptoms] ([PatientHistoryId], [SymptomId], [InsertTime]) VALUES (16, 1, CAST(N'2021-04-17T17:39:07.417' AS DateTime))
INSERT [dbo].[PatientHistorySymptoms] ([PatientHistoryId], [SymptomId], [InsertTime]) VALUES (16, 2, CAST(N'2021-04-17T17:39:07.417' AS DateTime))
INSERT [dbo].[PatientHistorySymptoms] ([PatientHistoryId], [SymptomId], [InsertTime]) VALUES (16, 38, CAST(N'2021-04-17T17:39:07.417' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Allergies] ON 

INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (1, N'Wheezing', 1)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (2, N'Nausea', 1)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (3, N'Vomiting', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (4, N'Diarrhea', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (5, N'Fainting', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (6, N'Wheezing 1', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (7, N'Nausea 1', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (8, N'Vomiting 1', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (9, N'Diarrhea 1', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (10, N'Fainting 1', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (11, N'Test Symptom 5', 0)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (12, N'Test Symptom 4', 1)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (13, N'Test Symptom 3', 1)
INSERT [dbo].[Allergies] ([AllergieId], [Name], [NumberOfUse]) VALUES (24, N'ahmed', 1)
SET IDENTITY_INSERT [dbo].[Allergies] OFF
GO
INSERT [dbo].[PatientHistoryAllergies] ([PatientHistoryId], [AllergieId], [InsertTime]) VALUES (16, 12, CAST(N'2021-04-17T17:39:07.413' AS DateTime))
INSERT [dbo].[PatientHistoryAllergies] ([PatientHistoryId], [AllergieId], [InsertTime]) VALUES (16, 13, CAST(N'2021-04-17T17:39:07.413' AS DateTime))
INSERT [dbo].[PatientHistoryAllergies] ([PatientHistoryId], [AllergieId], [InsertTime]) VALUES (16, 24, CAST(N'2021-04-17T17:39:07.413' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Diagnoses] ON 

INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (1, N'Wheezing', 10)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (2, N'Nausea', 9)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (3, N'Vomiting', 8)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (4, N'Diarrhea', 8)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (5, N'Fainting', 6)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (6, N'Wheezing 1', 6)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (7, N'Nausea 1', 5)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (8, N'Vomiting 1', 5)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (9, N'Diarrhea 1', 4)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (10, N'Fainting 1', 4)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (11, N'Test Symptom 5', 5)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (12, N'Test Symptom 4', 4)
INSERT [dbo].[Diagnoses] ([DiagnosisId], [Name], [NumberOfUse]) VALUES (13, N'Test Symptom 3', 3)
SET IDENTITY_INSERT [dbo].[Diagnoses] OFF
GO
SET IDENTITY_INSERT [dbo].[Medicines] ON 

INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (1, N'Wheezing', 10)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (6, N'Nausea', 9)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (7, N'Vomiting', 8)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (8, N'Diarrhea', 8)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (13, N'Fainting', 6)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (14, N'Wheezing 1', 6)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (15, N'Nausea 1', 5)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (16, N'Vomiting 1', 5)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (17, N'Diarrhea 1', 4)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (18, N'Fainting 1', 4)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (27, N'Test Symptom 5', 5)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (28, N'Test Symptom 4', 4)
INSERT [dbo].[Medicines] ([MedicineId], [Name], [NumberOfUse]) VALUES (29, N'Test Symptom 3', 3)
SET IDENTITY_INSERT [dbo].[Medicines] OFF
GO
INSERT [dbo].[PatientHistoryMedicines] ([PatientHistoryId], [MedicineId], [InsertTime]) VALUES (1, 1, CAST(N'2021-03-23T21:06:37.580' AS DateTime))
INSERT [dbo].[PatientHistoryMedicines] ([PatientHistoryId], [MedicineId], [InsertTime]) VALUES (1, 6, CAST(N'2021-03-23T21:06:37.580' AS DateTime))
INSERT [dbo].[PatientHistoryMedicines] ([PatientHistoryId], [MedicineId], [InsertTime]) VALUES (2, 7, CAST(N'2021-04-23T21:06:37.580' AS DateTime))
INSERT [dbo].[PatientHistoryMedicines] ([PatientHistoryId], [MedicineId], [InsertTime]) VALUES (2, 8, CAST(N'2021-04-23T21:06:37.580' AS DateTime))
INSERT [dbo].[PatientHistoryMedicines] ([PatientHistoryId], [MedicineId], [InsertTime]) VALUES (2, 13, CAST(N'2021-04-23T21:06:37.580' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Navbar] ON 

INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (2, N'Home', N'fa fa-user', 0, NULL, NULL, 2)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (3, N'Patient', N'fa fa-user', 0, NULL, NULL, 1)
INSERT [dbo].[Navbar] ([Id], [Name], [Icon], [LevelInMenu], [ParentId], [AbilityId], [Order]) VALUES (12, N'EMR', N'fa fa-user', 1, 3, 10, 1)
SET IDENTITY_INSERT [dbo].[Navbar] OFF
GO
