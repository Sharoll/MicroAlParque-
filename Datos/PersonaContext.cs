using Entidad;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class PersonaContext: DbContext
    {
        public PersonaContext(DbContextOptions options): base(options){
        }
        public DbSet<Persona> Personas {get;set;}
         public DbSet<Restaurante> Restaurantes {get;set;}
         public DbSet <Usuario> Usuarios {get;set;}
         protected override void OnModelCreating(ModelBuilder modelBuilder){
             modelBuilder
                .Entity<Persona>()
                .HasOne<Restaurante>()
                .WithMany()
                .HasForeignKey(p => p.Idrestaurante);
         }

    }
}