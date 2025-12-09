# Plano de Backup e Recuperação SafeBridge

## Backup
- Backup automático diário do banco de dados (SQLite/Postgres) via script agendado (`scripts/backup-db.sh`).
- Armazenamento dos arquivos de backup em local seguro (cloud/S3/Supabase Storage).
- Retenção mínima recomendada: 30 dias.
- Backups de arquivos anexados (uploads) realizados via snapshot do storage externo.


## Recuperação
- Para restaurar o banco SQLite local, use o script:
	```bash
	sh scripts/restore-db.sh backups/dev-AAAAmmdd-HHMMSS.db
	```
	Isso irá substituir o arquivo `dev.db` pelo backup selecionado.
- Para restaurar arquivos anexados, recupere o snapshot do storage externo.
- Teste a integridade dos dados após a restauração acessando o app localmente e validando as rotas principais.

## Testes de Recuperação
- Realizar testes de recuperação pelo menos 1x por mês.
- Documentar resultados e ajustar procedimentos conforme necessário.

## Segurança
- Backups criptografados e protegidos por acesso restrito.
- Monitoramento de falhas e alertas automáticos em caso de erro no backup.

## Script exemplo
```bash
sh scripts/backup-db.sh
```

> Consulte este documento sempre que precisar restaurar dados ou revisar a política de backup.