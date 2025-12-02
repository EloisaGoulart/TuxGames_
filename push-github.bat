@echo off
REM Script para enviar projeto para GitHub

cd /d "c:\Users\Elois\Downloads\Tux-Games-main\Tux-Games-main"

echo === Inicializando Git ===
git init

echo === Configurando Usuario ===
git config user.name "EloisaGoulart"
git config user.email "eloisa@email.com"

echo === Adicionando Arquivos ===
git add .

echo === Criando Commit ===
git commit -m "Tux Games - Projeto organizado com formulario Supabase"

echo === Adicionando Remote ===
git branch -M main
git remote add origin https://github.com/EloisaGoulart/Tux_Games.git

echo === Enviando para GitHub ===
git push -u origin main

echo === PRONTO! ===
echo Seu projeto foi enviado para GitHub!
echo Acesse: https://github.com/EloisaGoulart/Tux_Games
pause
