import os

BASE_PATH = r"C:\Users\pande\Co-Drive"
BASE_PATH_YAML = BASE_PATH.replace("\\", "/")

CLASSES_FILE = os.path.join(BASE_PATH, "classes.names")
YAML_PATH = os.path.join(BASE_PATH, "dataset.yaml")

with open(CLASSES_FILE, "r") as f:
    names = [line.strip() for line in f if line.strip()]

nc = len(names)

yaml_content = (
    f"path: {BASE_PATH_YAML}\n\n"
    f"train: train.txt\n"
    f"val: val.txt\n"
    f"test: test.txt\n\n"
    f"nc: {nc}\n"
    f"names: {names}\n"
)

with open(YAML_PATH, "w") as f:
    f.write(yaml_content)

print("dataset.yaml created")
print("nc =", nc)
print("names =", names)
