# NuvStore Studio - App de Llaveros Rancios

¡Hola! Esta es la aplicación de NuvStore Studio creada para gestionar tus llaveros, simular diseños y calcular costos en Wilson.

---

## 🚀 Opción 1: Subir a Netlify (Para tener la web online)

### Método A: Arrastrar y Soltar (Netlify Drop)
1. Extrae el ZIP en tu computadora.
2. Abre la terminal en esa carpeta y ejecuta:
   ```bash
   npm install
   npm run build
   ```
3. Se creará una carpeta llamada `dist`.
4. Ve a [Netlify Drop](https://app.netlify.com/drop) y arrastra **solamente la carpeta `dist`**. ¡Y listo!

### Método B: Desde GitHub (Recomendado)
1. Sube los archivos a tu repositorio de GitHub.
2. Conecta tu cuenta de GitHub en Netlify.
3. Netlify leerá automáticamente el archivo `netlify.toml` con la configuración:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

---

## 💻 Opción 2: Editar el Código en tu Computadora (VS Code)

1. **Abre la carpeta** descargada en **Visual Studio Code**.
2. **Abre la terminal** en VS Code (Ctrl + `) y ejecuta:
   ```bash
   npm install
   ```
3. **Inicia el servidor local:**
   ```bash
   npm run dev
   ```
4. Abre la dirección `http://localhost:3000` en tu navegador.
5. Puedes modificar los componentes en `/src/components/` o los personajes en `/src/data/characters.ts`.
