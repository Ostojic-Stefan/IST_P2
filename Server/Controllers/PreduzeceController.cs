using Microsoft.AspNetCore.Mvc;
using Server.Data;
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
        public IActionResult GetAllPreduzeca()
        {
            return Ok(_repo.GetAllPreduzeca());
        }

        [HttpGet("pib")]
        public IActionResult GetPreduzeceByPib(string pib)
        {
            Preduzece? pred = _repo.GetPreduzeceByPib(pib);

            if (pred == null)
                return NotFound();

            return Ok(pred);
        }

        [HttpGet("naziv")]
        public IActionResult GetPreduzeceByNaziv(string naziv)
        {
            Preduzece? pred = _repo.GetPreduzeceByNaziv(naziv);

            if (pred == null)
                return NotFound();

            return Ok(pred);
        }

        [HttpPost]
        public IActionResult PostPreduzece(Preduzece pred)
        {
            _repo.PostPreduzece(pred);
            return Ok("Successfully Created");
        }

    }
}