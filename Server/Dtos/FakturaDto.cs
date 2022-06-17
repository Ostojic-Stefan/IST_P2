#nullable disable

using Server.Utils;

namespace Server.Dtos
{
    public class FakturaDto
    {
        public string PIBkome               { get; set; }
        public string PIBodKoga             { get; set; }
        public DateTime DatumPlacanja       { get; set; }
        // Stavka
        public decimal UkupnaCena           { get; set; }
        public TipFakture Tip               { get; set; }
    }
}