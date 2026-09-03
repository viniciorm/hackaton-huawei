---
layout: manual
title: IR-Sentinel · AI Agent Hackathon
description: Guía de caso de uso para un agente SRE autónomo
---

# IR-Sentinel: respuesta autónoma a incidentes

## De una alerta 502 a una recuperación verificable

Esta guía documenta la construcción de un agente SRE para la **AI Agent Hackathon**.
La solución combina OpenCode, Kostra Cloud (`glm-5.2`), Docker, Nginx, FastAPI,
MCP, Engram y TypeScript/pnpm.

El recorrido central es deliberadamente visible: una API continúa en `200`, Nginx
entrega `502`, el agente correlaciona evidencia, crea un snapshot, valida la
configuración, recarga el proxy y comprueba que ambos caminos vuelvan a `200`.

## Qué se puede explorar

- [Leer el artículo completo de implementación](./articulo-api502.html)
- [Abrir el caso `api502` en GitHub](https://github.com/viniciorm/hackaton-huawei/tree/main/casos/api502)
- [Ver el research técnico](https://github.com/viniciorm/hackaton-huawei/blob/main/vini_research.md)
- [Consultar la arquitectura](./architecture.html)
- [Consultar el guion de demostración](./demo-script.html)
- [Revisar la evidencia de la rúbrica](./rubric-evidence.html)

## Resultado validado

```text
Nginx 502 → evidencia → política ≥80% → snapshot → nginx -t
→ reload → proxy 200 + backend 200
```

La guía completa explica las decisiones tomadas durante el diseño, los desafíos
resueltos, la estrategia de pruebas, la optimización de tokens y los colaboradores
registrados en el historial Git.
