import { auth } from '@/features/auth';

import { GradeCard } from '@/widgets';

import { GRADES, getLessonsByGrade } from '@/shared/config';

export default async function HomePage() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-heading md:text-5xl">
          📐 Математика | Репетитор
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Добро пожаловать на обучающий сайт по математике! Выберите тему, чтобы начать изучение
          материала.
        </p>
      </section>

      {/* Grades Grid */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-heading">Выберите модуль</h2>

        {/* Алгебра */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-heading">Алгебра</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GRADES.filter((grade) => ['5-6', '7', '8', '9', '10', '11'].includes(grade.id)).map(
              (grade) => {
                const lessons = getLessonsByGrade(grade.id);
                return (
                  <GradeCard
                    key={grade.id}
                    grade={grade}
                    lessonsCount={lessons.length}
                    isLocked={!isAuthenticated}
                  />
                );
              }
            )}
          </div>
        </div>

        {/* Геометрия */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-heading">Геометрия</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GRADES.filter((grade) => ['12', '13', '14', '15', '16'].includes(grade.id)).map(
              (grade) => {
                const lessons = getLessonsByGrade(grade.id);
                return (
                  <GradeCard
                    key={grade.id}
                    grade={grade}
                    lessonsCount={lessons.length}
                    isLocked={!isAuthenticated}
                  />
                );
              }
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-heading">Экзаменационные материалы</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GRADES.filter((grade) => ['17', '18', '19', '20', '21'].includes(grade.id)).map(
              (grade) => {
                const lessons = getLessonsByGrade(grade.id);
                return (
                  <GradeCard
                    key={grade.id}
                    grade={grade}
                    lessonsCount={lessons.length}
                    isLocked={!isAuthenticated}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      {!isAuthenticated && (
        <section className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <h2 className="mb-2 text-xl font-bold text-heading">🔐 Требуется авторизация</h2>
          <p className="text-gray-600">
            Для доступа к урокам необходимо войти в систему. Введите пароль на странице входа.
          </p>
        </section>
      )}
    </div>
  );
}
