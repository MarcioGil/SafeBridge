# Infraestrutura de Produção

- **Banco de dados:** Recomenda-se uso de Postgres em produção (SQLite apenas para dev/local).
- **Storage de arquivos:** Utilize serviços confiáveis como AWS S3 ou Supabase Storage para provas/anexos.
- **Backup:** Configure backups automáticos do banco e storage, com rotina de restauração testada.
- **Logs:** Implemente logging das operações sensíveis (sem dados pessoais), com monitoramento de erros e alertas.
- **HTTPS:** Garanta que todo o tráfego seja criptografado.
- **Segredos e variáveis:** Nunca exponha segredos no código. Use variáveis de ambiente seguras (Vercel, GitHub Secrets, Vault).
- **Plano de resposta a incidentes:** Documente o processo de notificação, correção e remediação em caso de falhas ou vazamentos.

Consulte o arquivo SECURITY.md para detalhes sobre governança e resposta a incidentes.
