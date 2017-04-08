```
# --name-only 只显示文件名 
git log --name-only -1
# --pretty=format:"" 格式化commit message 这里什么都不显示
git log --pretty=format:"" -1
# 最终
git log --pretty=format:"" --name-only  -1
```
