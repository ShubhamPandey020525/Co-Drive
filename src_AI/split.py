import os
import random
from collections import defaultdict

DATASET_PATH = r"C:\Users\pande\Co-Drive\Dataset"
OUTPUT_PATH = r"C:\Users\pande\Co-Drive"

image_exts = (".jpg", ".jpeg", ".png")

# class_id -> set(image paths)
class_to_images = defaultdict(set)

# scan dataset folder
for file in os.listdir(DATASET_PATH):
    if file.lower().endswith(image_exts):
        name = os.path.splitext(file)[0]
        label_path = os.path.join(DATASET_PATH, name + ".txt")

        if not os.path.exists(label_path):
            continue

        with open(label_path, "r") as f:
            for line in f:
                cls_id = int(line.split()[0])
                class_to_images[cls_id].add(
                    os.path.join(DATASET_PATH, file)
                )

train_set, val_set, test_set = set(), set(), set()

# class-wise split
for cls, images in class_to_images.items():
    images = list(images)
    random.shuffle(images)

    n = len(images)
    t_end = int(0.7 * n)
    v_end = int(0.9 * n)

    train_set.update(images[:t_end])
    val_set.update(images[t_end:v_end])
    test_set.update(images[v_end:])

# write txt files in Co-Drive (not Dataset)
def write_txt(filename, data):
    with open(os.path.join(OUTPUT_PATH, filename), "w") as f:
        for path in sorted(data):
            f.write(path.replace("\\", "/") + "\n")

write_txt("train.txt", train_set)
write_txt("val.txt", val_set)
write_txt("test.txt", test_set)

print(" Class-wise TXT split done")
print("Train:", len(train_set))
print("Val:", len(val_set))
print("Test:", len(test_set))
