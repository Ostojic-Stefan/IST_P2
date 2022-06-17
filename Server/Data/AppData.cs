using Server.Models;
using Server.Utils;

namespace Server.Data
{
    public class AppData
    {
        public static List<Faktura> fakture = new List<Faktura> {
            new Faktura {
                Id = 96,
                PIBkome = "324526789",
                PIBodKoga = "123456789",
                DatumGenerisanja = new DateTime(2020, 11, 26),
                DatumPlacanja = DateTime.Now,
                UkupnaCena = 500,
                Tip = TipFakture.ULAZNA
            },
            new Faktura {
                Id = 69,
                PIBkome = "123456789",
                PIBodKoga = "324526789",
                DatumGenerisanja = new DateTime(2020, 11, 26),
                DatumPlacanja = DateTime.Now,
                UkupnaCena = 5000,
                Tip = TipFakture.ULAZNA
            },
            new Faktura {
                Id = 70,
                PIBkome = "123456789",
                PIBodKoga = "324526789",
                DatumGenerisanja = new DateTime(2020, 11, 26),
                DatumPlacanja = DateTime.Now,
                UkupnaCena = 5000,
                Tip = TipFakture.ULAZNA
            }
        };

        public static List<Preduzece> preduzeca = new List<Preduzece> {
            new Preduzece { 
                Pib = "123456789",
                Ime = "TEST_IME_1",
                Prezime = "TEST_PREZIME_1",
                Email = "test@test.com",
                Naziv = "TEST_NAZIV_1",
                Adresa = "TEST_ADRESA_1",
            },
            new Preduzece { 
                Pib = "324526789",
                Ime = "TEST_IME_2",
                Prezime = "TEST_PREZIME_2",
                Email = "test@test.com",
                Naziv = "TEST_NAZIV_2",
                Adresa = "TEST_ADRESA_2",
            }
        };
    }
}