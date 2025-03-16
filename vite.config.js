import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Vite'nin proje kök dizini olarak 'src' klasörünü kullanmasını sağlar
  server: {
      port: 5173, // Vite'nin 5173 portundan çalışmasını sağlar
      open: true, // Tarayıcıda otomatik olarak açar, npm run dev komutu çalıştırıldığında
      cors: true, // CORS politikasını devre dışı bırakır. API çağrıları yaparken kullanışlıdır.
  },
  build: {
      outDir: '../dist', // Çıktıyı proje kökünde 'dist' klasörüne alır. Bu, Vite'nin çıktıyı 'src' klasörüne yerleştirmesini engeller. Elma da olur dist yerine.
      emptyOutDir: true, // Çıktı klasörünü her seferinde temizler. Bu, her seferinde yeni bir çıktı oluşturur.
  }
});
