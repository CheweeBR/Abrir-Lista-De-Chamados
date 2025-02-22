# Classificação de Grãos de Café (Coffee Bean Dataset)

## Equipe
- Tiago Eloy Possidonio Pereira / RA: 2417677

## Descrição do Descritor
Neste projeto, utilizamos um **descritor de cor** baseado em **histograma HSV**.  
- **Histograma HSV**: Convertemos cada imagem de BGR para HSV e extraímos um histograma 3D (H, S, V) com 8 bins por canal, totalizando 512 valores por imagem.  
- Esse tipo de descritor é eficiente para capturar **informações de cor** que diferenciam as classes (Dark, Green, Light, Medium).

## Repositório do Projeto
- https://colab.research.google.com/drive/1NENgnd9sWcy6mfw_bvXlJ3vbedL-TEDk?usp=sharing

## Classificador e Acurácia
- **Classificador**: SVM (kernel='linear')  
- **Acurácia obtida**: aproximadamente **98%**  
- **Outras métricas**: precisão, recall e F1-score acima de 95% para todas as classes.

## Instruções de Uso
1. Faça o download do notebook `projeto_final.ipynb` do repositório.
2. Abra-o no Google Colab.
3. Monte seu Google Drive e aponte o caminho para o dataset (que deve ter a estrutura `train/` e `test/`).
4. Execute todas as células para reproduzir os resultados.
