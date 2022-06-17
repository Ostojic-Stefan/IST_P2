using Server.Dtos;
using Server.Models;

namespace Server.Interfaces
{
    public interface IRepository
    {
         List<Preduzece> GetAllPreduzeca();
         List<Faktura> GetAllFakture();
         Preduzece? GetPreduzeceByPib(string pib);
         Preduzece? GetPreduzeceByNaziv(string naziv);
         void PostPreduzece(PreduzeceDto pred);
         void UpdatePreduzece(Preduzece pred, PreduzeceDto preduzece);
         List<Faktura> GetFaktureZaPreduzece(string pib);
         void PostFaktura(FakturaDto faktura);
    }
}