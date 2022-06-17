using Microsoft.AspNetCore.Mvc;
using Server.Dtos;
using Server.Interfaces;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FakturaController : ControllerBase
    {
        private readonly IRepository _repo;

        public FakturaController(IRepository repository)
        {
            _repo = repository;
        }


        [HttpGet("{pib}")]
        public IActionResult GetFaktureZaPreduzece(string pib)
        {
            return Ok(_repo.GetFaktureZaPreduzece(pib));
        }

        [HttpPost]
        public IActionResult PostFaktura(FakturaDto faktura)
        {
            _repo.PostFaktura(faktura);

            return Ok("Created");
        }
        

    }
}