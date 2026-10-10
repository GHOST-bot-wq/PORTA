# CodeLabx — Site Oficial de Alto Padrão

Site comercial premium para a **CodeLabx**, especializado na criação de sites profissionais sob medida para empresas em geral, prestadores de serviços, negócios locais e profissionais independentes.

---

## 🚀 Como Executar e Visualizar o Projeto

### Opção 1: Visualização Imediata no Navegador (Sem Instalação)
Basta abrir diretamente o arquivo:
```
index.html
```
ou
```
standalone-preview.html
```
Ele roda diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari), com:
- Todas as composições visuais fiéis à atmosfera de referência (`Resq.io`), incluindo feixe de luz diagonal superior e cone spotlight inferior;
- Todas as seções: Hero, Tecnologias, Oportunidade, Soluções, Bento Grid, Base Sólida, Demonstrações com Modal Interativo, Diferenciais, Processo em 5 etapas e CTA Final;
- Links de WhatsApp centralizados e configurados;
- 100% responsivo para mobile, tablet e desktop.

### Opção 2: Deploy na Vercel
O projeto já está configurado via `vercel.json` e `build.js` apontando para o diretório `dist/index.html`.

---

## 📱 Onde Substituir o Número do WhatsApp

O número do WhatsApp está centralizado de forma transparente:

1. **Na versão estática (`index.html` e `standalone-preview.html`):**
   No início do bloco `<script>` no rodapé do arquivo:
   ```javascript
   const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo seu número internacional (ex: 55 + DDD + 9 dígitos)
   ```

2. **Na versão React/TypeScript (`src/config/site.ts`):**
   ```typescript
   export const SITE_CONFIG = {
     whatsapp: {
       number: "5511999999999", // Substitua aqui
       displayNumber: "+55 (11) 99999-9999",
       // ...
     }
   };
   ```

---

## 👁️ Portfólio Conceitual e Demonstrações Interativas

O site apresenta 3 projetos conceituais navegáveis por modal para diferentes segmentos:
1. **Lumière Estética & Bem-Estar** (Segmento: Saúde, Estética & Cuidados)
2. **Nexus Engenharia & Consultoria** (Segmento: Empresas, Consultoria & B2B)
3. **Studio Vertex Arquitetura** (Segmento: Negócios Locais, Arquitetura & Design)

Todos os projetos possuem aviso explícito de transparência, identificando-se como conceitos desenvolvidos pela CodeLabx para comprovação técnica e estética.

---

## 🛡️ Auditoria de Credibilidade e CRO

- **Eliminação de métricas não comprovadas:** Foram removidas alegações arbitrárias como números fictícios de leads, notas mobile inventadas, porcentagens de rejeição e promessas de conversão automática.
- **Painel do Hero reestruturado:** Transformado em demonstração conceitual interativa dos pilares reais da solução (Design Sob Medida, WhatsApp Direto, Foco no Celular).
- **Copy orientada a empresas em geral:** Comunicação clara, direta, sem jargões e sem posicionamento exclusivo para estética.
