import pandas as pd
import json

df = pd.read_excel('shopee_tc.xlsx')

print("=== COLUMNS ===")
print(df.columns.tolist())

print("=== HEAD ===")
print(df.head(5).to_string())

selenium_rows = []
for index, row in df.iterrows():
    for col in df.columns:
        if isinstance(row[col], str) and 'selenium' in row[col].lower():
            selenium_rows.append(row.to_dict())
            break

print("=== SELENIUM ROWS ===")
print(json.dumps(selenium_rows, indent=2, default=str))
