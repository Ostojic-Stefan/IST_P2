using Server.Data;
using Server.Interfaces;
using Server.Models;

namespace Server.Repository
{
    public class Repository : IRepository
    {
        // private readonly Preduzeca _preduzeca;
        // private readonly Fakture _fakture;

        // public Repository(Preduzeca preduzeca, Fakture fakture)
        // {
        //     this._preduzeca = preduzeca;
        //     this._fakture = fakture;
        // }

        public ICollection<Preduzece> GetAllPreduzeca()
        {
            return Preduzeca.preduzeca;
        }

        public ICollection<Faktura> GetAllFakture()
        {
            return Fakture.fakture;
        }

        public Preduzece? GetPreduzeceByPib(string pib)
        {
            return Preduzeca.preduzeca.FirstOrDefault(p => p.Pib == pib);
        }

        public Preduzece? GetPreduzeceByNaziv(string naziv)
        {
            return Preduzeca.preduzeca.FirstOrDefault(p => p.Naziv == naziv);
        }

        public void PostPreduzece(Preduzece pred)
        {
            Preduzeca.preduzeca.Add(pred);
        }

    }
}