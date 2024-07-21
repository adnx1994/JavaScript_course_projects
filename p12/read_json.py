import pandas as pd
import json

# بارگذاری داده‌های JSON
with open("f:/my python project/my python codes/JavaScript_course_projects/p12/em.json", "r") as file:
    data = json.load(file)

# نمایش داده‌ها
print(data)

# اگر داده‌ها دیکشنری ساده باشند
if isinstance(data, dict):
    data = [data]  # تبدیل دیکشنری به لیست از دیکشنری‌ها

# تبدیل به DataFrame
df = pd.DataFrame(data)
print(df)

# تنظیم ایندکس DataFrame
df.index = df['email']

# نمایش DataFrame با ایندکس جدید
print(df)
