namespace Server.Utils
{
    public class CustomJSONSerializer<T>
    {
        public string Path { get; private set; }

        public CustomJSONSerializer(string path)
        {
            Path = path;
        }

        public async Task SerializeToFile(T obj)
        {
            using (FileStream fs = new FileStream(Path, FileMode.OpenOrCreate))
            {
                await System.Text.Json.JsonSerializer.SerializeAsync<ICollection<T>>(fs, new List<T> { obj });
            }
        }

        public async Task<ICollection<T>?> DeserializeFromFile()
        {
            using (FileStream fs = new FileStream(Path, FileMode.Open))
            {
                try 
                {
                    return await System.Text.Json.JsonSerializer.DeserializeAsync<ICollection<T>>(fs);
                } 
                catch
                {
                    throw new Exception();
                }

            }
        }

        public async Task AppendToFile(T obj)
        {
            ICollection<T>? list;
            try
            {
                list = await DeserializeFromFile();
                list?.Add(obj);
            } 
            catch
            {
                list = new List<T> { obj };
            }

            using (FileStream fs = new FileStream(Path, FileMode.OpenOrCreate))
            {
                if (list != null)
                    await System.Text.Json.JsonSerializer.SerializeAsync<ICollection<T>>(fs, list);
            }
        }
    }
}