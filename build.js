import fs from 'fs';
import path from 'path';

// Cria o diretório dist para entrega na Vercel
const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copia o index.html completo para dist/index.html
fs.copyFileSync(path.resolve('index.html'), path.join(distDir, 'index.html'));

console.log('✅ Build concluído com sucesso para Vercel: dist/index.html gerado!');
