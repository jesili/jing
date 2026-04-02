# 科研个人主页（GitHub Pages）

这是一个**纯静态**科研个人主页模板（无需构建工具），支持：

- 响应式布局（手机/平板/桌面）
- 深色/浅色主题切换（默认跟随系统）
- 中英文切换（右上角按钮，自动记忆选择）
- 论文列表：按年份筛选、全文搜索、Abstract 展开、BibTeX 一键复制
- 项目/研究方向/教学/服务/荣誉与项目/联系方式等区块

## 你需要改哪里

几乎只需要改一个文件：

- `assets/data.js`：你的姓名、单位、关键词、链接、论文、项目等

可选：

- `assets/cv.pdf`：把你的简历 PDF 放到这里，并在 `assets/data.js` 里把 `cvUrl` 指向 `./assets/cv.pdf`

## 本地预览

方式 A（最简单）：用浏览器直接打开 `index.html`。

方式 B（推荐）：本地起一个静态服务器（避免某些浏览器对脚本的限制）：

```bash
cd research-homepage
python3 -m http.server 5173
```

然后打开 `http://localhost:5173`。

## 发布到 GitHub Pages（两种方式）

### 方式 1：发布到 `https://<用户名>.github.io/`（推荐）

1. 在 GitHub 新建仓库：仓库名必须是 `<用户名>.github.io`
2. 把本目录下的文件（`index.html`、`assets/` 等）推到这个仓库的默认分支（通常是 `main`）
3. 等待 1–3 分钟即可访问 `https://<用户名>.github.io/`

### 方式 2：发布到项目页 `https://<用户名>.github.io/<仓库名>/`

1. 新建任意仓库名，比如 `homepage`
2. 进入仓库设置：Settings → Pages
3. Source 选择：Deploy from a branch
4. Branch 选择：`main` + `/ (root)`
5. 等待部署完成后访问 `https://<用户名>.github.io/homepage/`

> 注意：如果你用方式 2，请确保仓库根目录下就是 `index.html`（不要再套一层文件夹）。

## 自定义域名（可选）

如果你有域名，例如 `me.example.com`：

1. 在仓库 Settings → Pages 填入自定义域名
2. 在你的 DNS 里按 GitHub Pages 指引添加 `CNAME` 或 `A` 记录
3. （可选）在仓库根目录添加 `CNAME` 文件，内容为你的域名（一行）

## 常见修改建议

- **论文作者加粗**：模板会自动将 `meta.name` 与 authors 匹配并加粗（注意姓名写法一致）
- **摘要不要太长**：2–4 句话即可，方便读者快速扫读
- **外链**：尽量补齐 `pdf / code / project / arxiv`，让主页更“可点”

