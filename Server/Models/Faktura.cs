#nullable disable

using Server.Utils;

namespace Server.Models
{
    
    public class Faktura
    {
        public int Id                       { get; set; }
        public string PIBkome               { get; set; }
        public string PIBodKoga             { get; set; }
        public DateTime DatumGenerisanja    { get; set; }
        public DateTime DatumPlacanja       { get; set; }
        // Stavka
        public decimal UkupnaCena           { get; set; }
        public TipFakture Tip               { get; set; }
    }
}