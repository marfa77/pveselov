# Инструкция по деплою

## GitHub

Репозиторий: https://github.com/marfa77/pixid_portfolio (приватный)

### Первый деплой на GitHub

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

Если репозиторий еще не создан на GitHub:
1. Создайте приватный репозиторий `pixid_portfolio` на GitHub
2. Затем выполните команды выше

## Vercel (Рекомендуется для Next.js)

### Автоматический деплой через GitHub

1. Зайдите на [Vercel](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите репозиторий `marfa77/pixid_portfolio`
5. Vercel автоматически определит настройки Next.js
6. Нажмите "Deploy"

### Настройки окружения (если нужны)

Если в будущем понадобятся переменные окружения:
- Зайдите в Settings → Environment Variables
- Добавьте необходимые переменные

### Домен

После деплоя Vercel предоставит домен вида: `pixid-portfolio.vercel.app`

Для использования кастомного домена:
1. Settings → Domains
2. Добавьте домен `www.pixidstudio.online` (основной домен портфолио)
3. Настройте DNS записи согласно инструкциям Vercel
4. Убедитесь, что домен настроен в `lib/config.ts`

## Альтернативные варианты деплоя

### Netlify

1. Зайдите на [Netlify](https://www.netlify.com)
2. Подключите GitHub репозиторий
3. Настройки:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Self-hosted

Для деплоя на собственный сервер:

```bash
npm run build
npm start
```

Или используйте PM2:

```bash
npm install -g pm2
pm2 start npm --name "pixid-portfolio" -- start
pm2 save
pm2 startup
```

## Проверка после деплоя

После деплоя проверьте:
- ✅ Главная страница загружается
- ✅ Все страницы работают
- ✅ Иконки отображаются
- ✅ Sitemap доступен: `/sitemap.xml`
- ✅ Robots.txt доступен: `/robots.txt`
- ✅ SEO мета-теги работают
