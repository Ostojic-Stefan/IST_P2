using Server.Models;

namespace Server.Data
{
    public class Preduzeca
    {
        public static ICollection<Preduzece> preduzeca = new List<Preduzece> {
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