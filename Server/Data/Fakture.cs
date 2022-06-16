using Server.Models;
using Server.Utils;

namespace Server.Data
{
    public class Fakture
    {
        public static ICollection<Faktura> fakture = new List<Faktura> {
            new Faktura {
                Id = 96,
                PIBkome = "324526789",
                PIBodKoga = "123456789",
                DatumGenerisanja = new DateTime(2020, 11, 26),
                DatumPlacanja = DateTime.Now,
                UkupnaCena = 500,
                Tip = TipFakture.ULAZNA
            }
        };
    }
}