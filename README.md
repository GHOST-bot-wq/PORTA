# CodeLabx — Site Oficial de Alto Padrão

Projeto desenvolvido com máxima fidelidade estética e funcional à referência visual (`Resq.io`), traduzido para o modelo de negócios da **CodeLabx** (criação de sites de alta conversão para empresas e clínicas de estética).

---

## 🚀 Como Executar o Projeto

Você tem duas formas imediatas de visualizar e trabalhar com o projeto:

### Opção 1: Visualização Imediata no Navegador (Sem Instalação)
Basta dar dois cliques no arquivo:
```
standalone-preview.html
```
Ele abrirá diretamente no Google Chrome, Microsoft Edge ou qualquer navegador, com todas as animações, feixes de luz, modal interativo de clínicas e responsividade funcionando 100%.

### Opção 2: Ambiente de Desenvolvimento Vite + React + TypeScript
No terminal, dentro da pasta do projeto (`c:\Users\Win11\Downloads\CodeLabX`), execute:

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```
O Vite iniciará o servidor local em `http://localhost:3000`.

---

## 📱 Onde Substituir o Número do WhatsApp

O número do WhatsApp está centralizado em um único arquivo de configuração:

**Arquivo:** `src/config/site.ts`

```typescript
export const SITE_CONFIG = {
  // ...
  whatsapp: {
    // ⚠️ SUBSTITUA PELO SEU NÚMERO COM DDI E DDD:
    number: "5511999999999",
    displayNumber: "+55 (11) 99999-9999",
    // ...
  }
};
```

*(No arquivo `standalone-preview.html`, você também pode substituir `5511999999999` com um simples Localizar/Substituir caso utilize a versão estática).*

---

## 👁️ Como Visualizar as Demonstrações das Clínicas

1. Na seção **"Demonstrações"**, você encontrará os 3 projetos conceituais:
   - **Lumière Estética Avançada** (Clínica de Estética Premium)
   - **Aura Derma & Laser** (Clínica Moderna com Foco em Tecnologias e Lasers)
   - **Sculpt Face Harmonização** (Especializada em Harmonização Facial e Botox)
2. Clique no botão **"Visualizar Demonstração Completa 👁️"** em qualquer um dos cartões.
3. Um modal imersivo e navegável abrirá com:
   - Identidade e proposta de valor da clínica
   - Catálogo de procedimentos com filtro interativo por categoria
   - Perfil profissional do especialista (Dra. Nicole, Dr. Matheus, Dra. Camila)
   - Indicadores de satisfação e resultados
   - Botão direto de agendamento no WhatsApp já formatado para o procedimento específico.

---

## 🎨 Mapeamento Visual da Referência (0.0s a 14.0s)

| Momento no Vídeo | Elemento de Referência | Implementação CodeLabx |
| :--- | :--- | :--- |
| **0.0s - 1.5s** | Feixe de luz diagonal superior esquerdo + Headline + Dashboard com números 38, 26, 103 | `Hero.tsx` com `hero-diagonal-beam`, texto mestre obrigatório e painel de métricas interativo |
| **2.0s** | Barra de logos monocromáticos | `LogoCloud.tsx` com stack tecnológica moderna (Next.js, React, Tailwind, Vercel, WhatsApp API) |
| **2.0s - 3.5s** | "Issues arise every day" + Cartões flutuantes 3D com alertas | `ProblemSection.tsx` com os gargalos comerciais de empresas sem presença digital |
| **4.0s - 6.5s** | "Unified incident platform" + Circuitos animados + Chip central "AI" luminoso | `ArchitectureSection.tsx` com 4 nós de sistema interconectados ao chip **`CORE`** com bloom neon |
| **7.0s - 9.5s** | Bento Grid "All-in-one platform capabilities" | `BentoCapabilities.tsx` com simulação interativa de procedimentos e widgets de performance |
| **10.0s - 11.5s** | Pirâmide isométrica de cartões flutuantes "Built on a solid foundation" | `FoundationPyramid.tsx` com pirâmide de vidro em 3 níveis flutuando no cosmos |
| **Fase 3.6** | Apresentação comercial de produtos | `DemonstrativeProjects.tsx` & `ClinicModal.tsx` com 3 clínicas completas e navegáveis |
| **Fase 3.7 & 3.8** | Diferenciais e processo da agência | `DifferentiatorsSection.tsx` e `ProcessSection.tsx` (5 etapas claras) |
| **12.0s - 13.5s** | Cone de luz vertical ("Spotlight") + Botão central luminoso "Book Your Demo Today" | `FinalCtaSection.tsx` com `final-cta-spotlight` e chamada "Vamos criar o site da sua empresa?" |
| **14.0s** | Moldura / Viewport escuro arredondado | `App.tsx` com moldura de display elegante sobre fundo de estrelas `stars-background` |
