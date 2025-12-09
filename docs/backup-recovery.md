# Plano de Backup e Recuperação SafeBridge

## Backup
- Backup automático diário do banco de dados (SQLite/Postgres) via script agendado (`scripts/backup-db.sh`).
- Armazenamento dos arquivos de backup em local seguro (cloud/S3/Supabase Storage).
- Retenção mínima recomendada: 30 dias.
- Backups de arquivos anexados (uploads) realizados via snapshot do storage externo.

## Recuperação
- Para restaurar o banco, utilize o arquivo de backup mais recente e o comando de restauração do banco (SQLite/Postgres).
- Restaurar arquivos anexados a partir do snapshot do storage.
- Testar a integridade dos dados após a restauração.

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