flowchart TD

%% CAMADA CLIENTE
A[App Mobile / Coletor] --> B[Leitura QR Code]
A --> C[Leitura Nota Fiscal]
A --> D[Inputs do Usuário]

%% VALIDAÇÕES
B --> E[Validação Usuário]
E -->|/usuario_balcao/validar| F[Backend API]

C --> G[Buscar NFE]
G -->|/buscar_nfe| F

%% CRIAÇÃO ROMANEIO
D --> H[Configuração do Romaneio]
H --> I[Tipo de Romaneio]

I --> I1[Transportadora]
I --> I2[Motorista]
I --> I3[Transferência]

H --> J[Selecionar Armazém]
H --> K[Selecionar Transportadora]
H --> L[Selecionar Motorista]

J -->|cache/offline| F
K -->|cache/offline| F
L -->|cache/offline| F

%% SALVAR ROMANEIO
F --> M[Salvar Romaneio]
M -->|/romaneio_embarque/salvar| N[Romaneio Criado]

%% DECISÃO FINALIZAÇÃO
N --> O{Assinar agora?}

O -->|Sim| P[Finalizar Romaneio]
O -->|Não| Q[Pré-Romaneio]

%% PRÉ-ROMANEIO
Q -->|/pre-romaneio| R[Listagem Pendentes]
R --> P

%% FINALIZAR ROMANEIO
P --> S[Captura Dados]
S --> S1[Foto Documento]
S --> S2[Assinatura]
S --> S3[Foto Produto]

S --> T[Upload Arquivos]
T -->|/upload| F

P --> U[Verificar Imagem]
U -->|/verificar-imagem| F

P --> V[Finalizar Processo]

%% ENTREGA BALCÃO
V --> W[Entrega Balcão]

W --> X[Buscar Entregas]
X -->|/buscar_entregas| F

W --> Y[Selecionar Nota]
Y --> Z[Visualizar Produtos]

Z --> AA[Assinar Entrega]

%% FINALIZAR ENTREGA
AA --> AB[Captura Dados Entrega]
AB --> AB1[Foto Produto]
AB --> AB2[Foto Documento]
AB --> AB3[Assinatura]
AB --> AB4[CSAT]

AB --> AC[Salvar Entrega]
AC -->|/entrega/balcao/salvar| F

%% TRANSFERÊNCIA
V --> AD[Romaneio Entrada]

AD --> AE[Visualizar Transferência]
AE --> AF[Confirmar Recebimento]

AF --> AG[Captura Assinatura]
AF --> AH[Foto Documento]

AF --> AI[Salvar Recebimento]
AI -->|/romaneio_transferencias/recebimento| F

%% MONTAGEM CARGA
V --> AJ[Montagem de Carga]

AJ --> AK[Leitura QR TMS]
AJ --> AL[Validar Volume]

AL --> AM{Romaneio Assinado?}
AM -->|Sim| AN[Finaliza]
AM -->|Não| P

%% ORDEM DE SERVIÇO
V --> AO[Ordem de Serviço]

AO --> AP[Listar OS]
AP --> AQ{Status}

AQ -->|Aprovado| AR[Finalizar Aprovado]
AQ -->|Reprovado| AS[Finalizar Reprovado]

AR --> AT[Salvar OS]
AS --> AT

AT -->|/ordem_servico/finalizar| F

%% COMPROVANTES
V --> AU[Escanear Comprovantes]

AU --> AV[Validar Usuário]
AU --> AW[Buscar Nota]
AU --> AX[Foto Comprovante]

AX --> AY[Salvar]
AY -->|/notas_pendentes/salvar| F
