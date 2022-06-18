using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Dtos;
using Server.Interfaces;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PreduzeceController : ControllerBase
    {
        private readonly IRepository _repo;

        public PreduzeceController(IRepository repository)
        {
            _repo = repository;
        }

        [HttpGet]
        public IActionResult GetAllPreduzeca([FromQuery] PreduzeceQuery query)
        {
            if (!string.IsNullOrEmpty(query.pib))
            {
                Preduzece? pred = _repo.GetPreduzeceByPib(query.pib);
                if (pred == null)
                    return NotFound();

                return Ok(pred);
            }

            else if (!string.IsNullOrEmpty(query.naziv))
            {
                Preduzece? pred = _repo.GetPreduzeceByNaziv(query.naziv);
                if (pred == null)
                    return NotFound();
                return Ok(pred);
            }

            return Ok(_repo.GetAllPreduzeca());
        }

        [HttpPost]
        public IActionResult PostPreduzece(PreduzeceDto pred)
        {
            System.Console.WriteLine(pred.Naziv);
            _repo.PostPreduzece(pred);
            return Ok("Successfully Created");
        }

        [HttpPut("{pib}")]
        public IActionResult UpdatePreduzece(string pib, PreduzeceDto preduzece)
        {
            var pred = _repo.GetPreduzeceByPib(pib);

            if (pred == null)
                return NotFound();

            _repo.UpdatePreduzece(pred, preduzece);
            return Ok();
        }
    }
}