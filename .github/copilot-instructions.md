# Copilot Instructions — Syntax Wear App

## Objetivo
Este arquivo define as regras gerais para o uso do GitHub Copilot neste projeto.

## Contexto do projeto
- Stack principal: React, TypeScript, Vite e Tailwind CSS.
- Respeite a arquitetura e a organização já existentes.
- Antes de sugerir alterações, leia e entenda o código relacionado.

## Regras gerais
- NÃO criar funcionalidades sem solicitação explícita.
- NÃO alterar a arquitetura sem solicitação explícita.
- Priorizar código simples, legível, consistente e tipado.
- Reutilizar componentes, funções e padrões existentes quando apropriado.
- Não adicionar dependências sem necessidade.
- Não remover código existente sem justificar.
- Não alterar configurações importantes sem explicar o impacto.
- Nunca expor, criar ou commitar segredos, tokens ou credenciais.

## Testes e qualidade
- Considere lint e build nas validações quando forem relevantes.
- Ao identificar um problema, explique a causa e o impacto antes de propor uma alteração.
- Não considere que uma alteração está correta sem validar o comportamento afetado.

## Agentes especializados
Este projeto possui agentes separados para:
- Testes: análise e validação do comportamento existente.
- Segurança: identificação de vulnerabilidades e riscos.
- Aprendizado: explicação do código para estudo.

Esses agentes NÃO são agentes de desenvolvimento. O desenvolvimento de funcionalidades continua sendo feito somente quando solicitado explicitamente.
