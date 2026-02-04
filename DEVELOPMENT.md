# ILEAGENT Development Guide

## Environment Variables Setup

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/ileagent
JWT_SECRET=your_secure_jwt_secret_min_32_chars
JWT_EXPIRE=7d
NODE_ENV=development
PORT=3001

PAYSTACK_SECRET_KEY=sk_test_xxxxx
PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASSWORD=app_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

REDIS_URL=redis://localhost:6379
```

### Web App (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_MAPBOX_TOKEN=your_token
NEXT_PUBLIC_STRIPE_KEY=pk_test_xxxxx
NEXT_PUBLIC_PAYSTACK_KEY=pk_test_xxxxx
```

### Mobile App (.env)
```
EXPO_PUBLIC_API_URL=http://localhost:3001
EXPO_PUBLIC_MAPBOX_TOKEN=your_token
EXPO_PUBLIC_STRIPE_KEY=pk_test_xxxxx
EXPO_PUBLIC_PAYSTACK_KEY=pk_test_xxxxx
```

## Database Setup

### PostgreSQL Installation
```bash
# macOS
brew install postgresql

# Ubuntu
sudo apt-get install postgresql postgresql-contrib

# Start PostgreSQL
brew services start postgresql
# or
sudo service postgresql start
```

### Create Database
```bash
createdb ileagent
# or
psql
# CREATE DATABASE ileagent;
```

### Run Migrations
```bash
cd apps/backend
npm run migrate
```

## Development Workflow

### Code Structure
- **Controllers**: Handle HTTP requests/responses
- **Services**: Business logic
- **Middleware**: Auth, validation, error handling
- **Types**: TypeScript interfaces
- **Utils**: Helper functions

### Adding New Features

1. **Define Types** (in `types/`)
2. **Create Service** (in `services/`)
3. **Create Controller** (in `controllers/`)
4. **Create Routes** (in `routes/`)
5. **Wire Routes** (in `index.ts`)
6. **Add Tests**

### API Response Format
```typescript
{
  success: boolean,
  data?: any,
  error?: string,
  timestamp: string
}
```

## Testing

```bash
# Backend tests
cd apps/backend
npm test

# Web app tests
cd apps/web
npm test

# Mobile app tests
cd apps/mobile
npm test
```

## Common Issues

### Port Already in Use
```bash
# Find process using port
lsof -i :3001

# Kill process
kill -9 <PID>
```

### Database Connection Issues
```bash
# Check PostgreSQL is running
pg_isready

# Reset migrations
npm run migrate:reset
```

### Mobile Build Issues
```bash
# Clear Expo cache
expo start -c

# Clear node_modules
rm -rf node_modules && npm install
```

## Performance Tips

1. **Use React Query** for efficient data fetching and caching
2. **Implement pagination** for large datasets
3. **Optimize images** before upload
4. **Use database indexes** on frequently queried columns
5. **Implement rate limiting** on API endpoints

## Security Checklist

- [ ] All passwords hashed with bcrypt
- [ ] JWTs properly signed and verified
- [ ] API endpoints have proper auth middleware
- [ ] Input validation on all forms
- [ ] SQL injection prevention (using Prisma)
- [ ] CORS properly configured
- [ ] Sensitive data not logged
- [ ] Environment variables not hardcoded
