using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Models;
using Models.Domain;
using System;

namespace DAL
{
    public class ClinicContext : DbContext
    {
        public ClinicContext(DbContextOptions<ClinicContext> options)
                : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User_Role>()
             .HasKey(bc => new { bc.RoleId, bc.UserId });

            modelBuilder.Entity<Navbar>()
              .HasKey(bc => new { bc.Id });

            modelBuilder.Entity<User_Role>()
              .HasOne(bc => bc.Role)
              .WithMany(b => b.User_Role)
              .HasForeignKey(bc => bc.RoleId);

            modelBuilder.Entity<User_Role>()
              .HasOne(bc => bc.User)
              .WithMany(b => b.User_Role)
              .HasForeignKey(bc => bc.UserId);

            modelBuilder.Entity<Role_Ability>()
              .HasKey(bc => new { bc.RoleId, bc.AbilityId });

            modelBuilder.Entity<Role_Ability>()
              .HasOne(bc => bc.Role)
              .WithMany(b => b.Role_Ability)
              .HasForeignKey(bc => bc.RoleId);

            modelBuilder.Entity<Role_Ability>()
              .HasOne(bc => bc.Ability)
              .WithMany(b => b.Role_Ability)
              .HasForeignKey(bc => bc.AbilityId);

            modelBuilder.Entity<Navbar>()
              .HasOne(c => c.Parent)
              .WithMany()
              .HasForeignKey(c => c.ParentId);

            modelBuilder.Entity<PatientHistoryAllergie>()
              .HasKey(bc => new { bc.PatientHistoryId, bc.AllergieId });

            modelBuilder.Entity<PatientHistoryAllergie>()
              .HasOne(bc => bc.PatientHistory)
              .WithMany(b => b.PatientHistoryAllergies)
              .HasForeignKey(bc => bc.PatientHistoryId);

            modelBuilder.Entity<PatientHistoryAllergie>()
              .HasOne(bc => bc.Allergie)
              .WithMany(b => b.PatientHistoryAllergies)
              .HasForeignKey(bc => bc.AllergieId);

            modelBuilder.Entity<PatientHistoryDiagnosis>()
              .HasKey(bc => new { bc.PatientHistoryId, bc.DiagnosisId });

            modelBuilder.Entity<PatientHistoryDiagnosis>()
              .HasOne(bc => bc.PatientHistory)
              .WithMany(b => b.PatientHistoryDiagnoses)
              .HasForeignKey(bc => bc.PatientHistoryId);

            modelBuilder.Entity<PatientHistoryDiagnosis>()
              .HasOne(bc => bc.Diagnosis)
              .WithMany(b => b.PatientHistoryDiagnoses)
              .HasForeignKey(bc => bc.DiagnosisId);

            modelBuilder.Entity<PatientHistoryMedicine>()
              .HasKey(bc => new { bc.PatientHistoryId, bc.MedicineId });

            modelBuilder.Entity<PatientHistoryMedicine>()
              .HasOne(bc => bc.PatientHistory)
              .WithMany(b => b.PatientHistoryMedicines)
              .HasForeignKey(bc => bc.PatientHistoryId);

            modelBuilder.Entity<PatientHistoryMedicine>()
              .HasOne(bc => bc.Medicine)
              .WithMany(b => b.PatientHistoryMedicines)
              .HasForeignKey(bc => bc.MedicineId);

            modelBuilder.Entity<PatientHistorySign>()
              .HasKey(bc => new { bc.PatientHistoryId, bc.SignId });

            modelBuilder.Entity<PatientHistorySign>()
              .HasOne(bc => bc.PatientHistory)
              .WithMany(b => b.PatientHistorySigns)
              .HasForeignKey(bc => bc.PatientHistoryId);

            modelBuilder.Entity<PatientHistorySign>()
              .HasOne(bc => bc.Sign)
              .WithMany(b => b.PatientHistorySigns)
              .HasForeignKey(bc => bc.SignId);

            modelBuilder.Entity<PatientHistorySymptom>()
              .HasKey(bc => new { bc.PatientHistoryId, bc.SymptomId });

            modelBuilder.Entity<PatientHistorySymptom>()
              .HasOne(bc => bc.PatientHistory)
              .WithMany(b => b.PatientHistorySymptoms)
              .HasForeignKey(bc => bc.PatientHistoryId);

            modelBuilder.Entity<PatientHistorySymptom>()
              .HasOne(bc => bc.Symptom)
              .WithMany(b => b.PatientHistorySymptoms)
              .HasForeignKey(bc => bc.SymptomId);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Ability> Abilities { get; set; }
        public DbSet<User_Role> Users_Roles { get; set; }
        public DbSet<Role_Ability> Roles_Abilities { get; set; }
        public DbSet<Navbar> Navbar { get; set; }
        public DbSet<Sign> Signs { get; set; }
        public DbSet<Diagnosis> Diagnoses { get; set; }
        public DbSet<Symptom> Symptoms { get; set; }
        public DbSet<Allergie> Allergies { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<PatientHistory> PatientHistory { get; set; }
        public DbSet<PatientHistoryAllergie> PatientHistoryAllergies { get; set; }
        public DbSet<PatientHistorySign> PatientHistorySigns { get; set; }
        public DbSet<PatientHistorySymptom> PatientHistorySymptoms { get; set; }
        public DbSet<PatientHistoryMedicine> PatientHistoryMedicines { get; set; }
        public DbSet<PatientHistoryDiagnosis> PatientHistoryDiagnoses { get; set; }

    }
}
