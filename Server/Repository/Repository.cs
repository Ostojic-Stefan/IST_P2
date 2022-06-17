using Server.Data;
using Server.Dtos;
using Server.Interfaces;
using Server.Models;

namespace Server.Repository
{
    public class Repository : IRepository
    {

        public List<Preduzece> GetAllPreduzeca()
        {
            return AppData.preduzeca
                .OrderBy(pred => pred.Pib)
                .ThenBy(pred => pred.Naziv)
                .ToList();
        }

        public List<Faktura> GetAllFakture()
        {
            return AppData.fakture;
        }

        public Preduzece? GetPreduzeceByPib(string pib)
        {
            return AppData.preduzeca
                .FirstOrDefault(p => p.Pib == pib);
        }

        public Preduzece? GetPreduzeceByNaziv(string naziv)
        {
            return AppData.preduzeca
                .FirstOrDefault(p => p.Naziv == naziv);
        }

        public void PostPreduzece(PreduzeceDto pred)
        {
            Preduzece newPred = MapDtoToPreduzece(pred);
            AppData.preduzeca.Add(newPred);
        }

        private Preduzece MapDtoToPreduzece(PreduzeceDto dto)
        {
            return new Preduzece {
                Pib = "111111111",
                Naziv = dto.Naziv,
                Ime = dto.Ime,
                Prezime = dto.Prezime,
                Email = dto.Email,
                Adresa = dto.Adresa
            };
        }

        private Faktura MapDtoToFaktura(FakturaDto dto)
        {
            return new Faktura {
                Id = 1337,
                PIBkome = dto.PIBkome,
                PIBodKoga = dto.PIBodKoga,
                DatumGenerisanja = DateTime.Now,
                DatumPlacanja = dto.DatumPlacanja,
                UkupnaCena = dto.UkupnaCena,
                Tip = dto.Tip
            };
        }

        public void UpdatePreduzece(Preduzece pred, PreduzeceDto preduzece)
        {
            if (pred == null) return;

            if (preduzece.Naziv != null)
                pred.Naziv = preduzece.Naziv;

            if (preduzece.Adresa != null)
                pred.Adresa = preduzece.Adresa;

            if (preduzece.Ime != null)
                pred.Ime = preduzece.Ime;

            if (preduzece.Prezime != null)
                pred.Prezime = preduzece.Prezime;
            
            if (preduzece.Email != null)
                pred.Email = preduzece.Email;

        }

        public List<Faktura> GetFaktureZaPreduzece(string pib)
        {
            return AppData.fakture.Where(fakt => fakt.PIBkome == pib).ToList();
        }

        public void PostFaktura(FakturaDto faktura)
        {
            AppData.fakture.Add(MapDtoToFaktura(faktura));
        }
    }
}