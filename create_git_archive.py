from datetime import datetime
import os
import subprocess
import sys


def create_git_archive():
    # 1. Проверяем, находится ли скрипт внутри Git-репозитория
    try:
        subprocess.run(
            ["git", "rev-parse", "--is-inside-work-tree"],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    except (subprocess.CalledProcessError, FileNotFoundError):
        print(
            "Ошибка: Текущая директория не является Git-репозиторием или Git не установлен."
        )
        sys.exit(1)

    # 2. Получаем имя корневой директории проекта
    try:
        repo_root = (
            subprocess.check_output(
                ["git", "rev-parse", "--show-toplevel"], text=True
            )
            .strip()
        )
        project_name = os.path.basename(repo_root)
    except subprocess.CalledProcessError:
        print("Не удалось определить корень Git-репозитория.")
        sys.exit(1)

    # 3. Формируем название архива: YYYYMMDD-HHMMSS-projectname.zip
    now = datetime.now().strftime("%Y%m%d-%H%M%S")
    archive_name = f"{now}-{project_name}.zip"

    # 4. Создаем архив с помощью git archive
    try:
        print(f"Создание архива {archive_name}...")
        # git archive формирует zip-архив только из отслеживаемых коммитов/файлов (HEAD)
        subprocess.run(
            ["git", "archive", "--format=zip", "-o", archive_name, "HEAD"],
            check=True,
            cwd=repo_root,  # Сохраняем архив в корню репозитория
        )
        archive_path = os.path.join(repo_root, archive_name)
        print(f"Успешно создан архив: {archive_path}")

    except subprocess.CalledProcessError as e:
        print(f"Ошибка при создании архива: {e}")
        sys.exit(1)


if __name__ == "__main__":
    create_git_archive()

