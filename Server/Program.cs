using Server.Interfaces;
using Server.Models;
using Server.Repository;
using Server.Utils;

var builder = WebApplication.CreateBuilder(args);


string connString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddSingleton<IRepository, Repository>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(cosrsBuilder => cosrsBuilder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
