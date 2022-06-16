using Server.Models;

namespace Server.Interfaces
{
    public interface IRepository
    {
         ICollection<Preduzece> GetAllPreduzeca();
         ICollection<Faktura> GetAllFakture();
         Preduzece? GetPreduzeceByPib(string pib);
         Preduzece? GetPreduzeceByNaziv(string naziv);
         void PostPreduzece(Preduzece pred);
    }
}