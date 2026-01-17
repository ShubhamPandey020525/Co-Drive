import os
import numpy as np

DATASET_PATH = r"C:\Users\pande\Co-Drive\Dataset"

areas = []
widths = []
heights = []

for file in os.listdir(DATASET_PATH):
    if file.endswith(".txt"):
        label_path = os.path.join(DATASET_PATH, file)

        with open(label_path, "r") as f:
            for line in f:
                parts = line.strip().split()
                if len(parts) != 5:
                    continue

                _, _, _, w, h = map(float, parts)
                area = w * h

                areas.append(area)
                widths.append(w)
                heights.append(h)

areas = np.array(areas)

# COCO-style thresholds (normalized area)
small = areas < 0.01
medium = (areas >= 0.01) & (areas < 0.05)
large = areas >= 0.05

print("Total boxes:", len(areas))
print("Small boxes:", small.sum())
print("Medium boxes:", medium.sum())
print("Large boxes:", large.sum())

print("\nAverage box width :", np.mean(widths))
print("Average box height:", np.mean(heights))
print("Average box area  :", np.mean(areas))
