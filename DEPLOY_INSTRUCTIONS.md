# Инструкция по деплою через GitHub + Vercel

## ✅ Текущий статус

- ✅ Все изменения запушены в GitHub: `https://github.com/marfa77/pixid_portfolio`
- ✅ Проект успешно собирается (`npm run build`)
- ✅ Домен настроен: `https://www.pixidstudio.online`
- ✅ Конфигурация Vercel готова (`vercel.json`)

## 🚀 Автоматический деплой через Vercel

### Вариант 1: Через веб-интерфейс Vercel (Рекомендуется)

1. **Зайдите на [Vercel](https://vercel.com)**
2. **Войдите через GitHub** (используйте тот же аккаунт, что и для репозитория)
3. **Нажмите "Add New Project"**
4. **Выберите репозиторий** `marfa77/pixid_portfolio`
5. **Vercel автоматически определит настройки:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. **Нажмите "Deploy"**

### Настройка домена

После первого деплоя:

1. Перейдите в **Settings → Domains**
2. Добавьте домен: `www.pixidstudio.online`
3. Следуйте инструкциям Vercel для настройки DNS записей:
   - Добавьте CNAME запись: `www` → `cname.vercel-dns.com`
   - Или A-запись, если указано в инструкциях Vercel

### Переменные окружения (если нужны)

Если в будущем понадобятся переменные окружения:

1. **Settings → Environment Variables**
2. Добавьте переменную `NEXT_PUBLIC_SITE_URL` со значением `https://www.pixidstudio.online`
3. Передеплойте проект

### Вариант 2: Через Vercel CLI

Если хотите использовать CLI:

```bash
# Установите Vercel CLI (локально в проект)
npm install --save-dev vercel

# Задеплойте
npx vercel

# Или для production деплоя
npx vercel --prod
```

При первом запуске нужно будет:
1. Войти в Vercel аккаунт
2. Выбрать проект или создать новый
3. Подтвердить настройки

## 🔄 Автоматический деплой

После настройки через веб-интерфейс Vercel:

- ✅ Каждый push в `main` ветку автоматически задеплоит проект
- ✅ Pull Request'ы получат preview деплой
- ✅ Все изменения из GitHub будут автоматически синхронизироваться

## ✅ Проверка после деплоя

После деплоя проверьте:

- ✅ Главная страница: `https://www.pixidstudio.online`
- ✅ Все страницы работают
- ✅ Sitemap: `https://www.pixidstudio.online/sitemap.xml`
- ✅ Robots.txt: `https://www.pixidstudio.online/robots.txt`
- ✅ Open Graph изображение: `https://www.pixidstudio.online/og-image.png`
- ✅ SEO мета-теги работают (проверьте через View Source)

## 📝 Текущая конфигурация

- **Домен:** `https://www.pixidstudio.online`
- **GitHub:** `https://github.com/marfa77/pixid_portfolio`
- **Framework:** Next.js 14 (App Router)
- **Build:** Статическая генерация (SSG)
- **Регионы:** iad1, fra1, sfo1 (настроено в vercel.json)

## 🔧 Troubleshooting

### Если деплой не работает:

1. Проверьте, что репозиторий не приватный или Vercel имеет доступ
2. Убедитесь, что `package.json` содержит все зависимости
3. Проверьте логи деплоя в Vercel Dashboard
4. Убедитесь, что домен правильно настроен в `lib/config.ts`

### Если домен не работает:

1. Проверьте DNS записи (может занять до 24 часов)
2. Убедитесь, что домен добавлен в Vercel Settings → Domains
3. Проверьте SSL сертификат (Vercel выдает автоматически)
