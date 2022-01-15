# Các định nghĩa cơ bản trong git 

# Mục lục
1. [Repository là gì?](#repository-l%C3%A0-g%C3%AC)
2. [Branch là gì?](#branch-l%C3%A0-g%C3%AC)
3. [Làm thế nào để xóa một branch?](#l%C3%A0m-th%E1%BA%BF-n%C3%A0o-%C4%91%E1%BB%83-x%C3%B3a-m%E1%BB%99t-branch)
4. [Push local branch lên remote server với một tên khác](#push-local-branch-l%C3%AAn-remote-server-v%E1%BB%9Bi-m%E1%BB%99t-t%C3%AAn-kh%C3%A1c)
5. [Phân biệt rebase và merge](#ph%C3%A2n-bi%E1%BB%87t-rebase-v%C3%A0-merge)
6. [Khác nhau giữa fetch và pull](#kh%C3%A1c-nhau-gi%E1%BB%AFa-fetch-v%C3%A0-pull)
7. [Thế nào là git stash?](#th%E1%BA%BF-n%C3%A0o-l%C3%A0-git-stash)
8. [Làm thế nào để xóa bỏ trạng thái vài commit gần đây?](#l%C3%A0m-th%E1%BA%BF-n%C3%A0o-%C4%91%E1%BB%83-x%C3%B3a-b%E1%BB%8F-tr%E1%BA%A1ng-th%C3%A1i-v%C3%A0i-commit-g%E1%BA%A7n-%C4%91%C3%A2y)
9. [Gộp một vài commit thành một commit duy nhất?](#g%E1%BB%99p-m%E1%BB%99t-v%C3%A0i-commit-th%C3%A0nh-m%E1%BB%99t-commit-duy-nh%E1%BA%A5t)
10. [Phân biệt giữa git reset, reset --soft, reset --hard](#phân-biệt-giữa-git-reset-reset-soft-reset-hard)
11. [Thế nào là cherry-pick?](#th%E1%BA%BF-n%C3%A0o-l%C3%A0-cherry-pick)
12. [Git flow là gì?](#git-flow-l%C3%A0-g%C3%AC)

### Repository là gì?
- Khi sử dụng git, lệnh đầu tiên mà chúng ta thường gõ:
```bash
$ git init
```
- lệnh này sẽ tạo ra một thư mục ẩn có tên .git và đây chính là repository(hay kho chứa). Còn phần code hay thư mục của project nằm cùng với thư mục .git được gọi là Working Directory. Git sử dụng repository này để lưu trữ, giám sát toàn bộ thông tin về các trạng thái và bất kì thay đổi nào với project
- Có hai loại repository gồm local repository - là repository nằm trên chính máy tính của chúng ta và remote repository - là repository nằm trên một máy chủ từ xa được cung cấp bởi các nhà phân phối như github, gitlab, Viettel :D 

### Branch là gì?
- Khi muốn phát triển thêm một tính năng mới mà cần đảm bào vẫn có thể dễ dàng khôi phục lại trạng thái trước đó thì ta có thể tạo 1 branch mới như sau:
```bash
$ git branch <tên-branch>
```
hoặc
```bash
git checkout -b <tên-branch>
```
- Branch mặc định là master
- Branch mới được tạo ra sẽ chứa toàn bộ trạng thái và những thay đổi đã thực hiện trên project trước khi tạo 
- Với mỗi repository ta có thể tạo nhiều branch khác nhau và các nhánh này là độc lập với nhau nên khi ta có thay đổi đối với project trên branch này sẽ không ảnh hưởng đến các branch khác
- Khi tính năng được ta thử nghiệm trên nhánh mới hoàn thiện và đã được kiểm tra đầy đủ, ta có thể tiến hành hợp nhất (đưa những thay đổi của nhánh này gộp vào với nhánh khác) 
- Có hai loại branch là local branch - là branch nằm trên máy tính của chúng ta và remote branch - là branch nằm trên máy chủ từ xa

### Làm thế nào để xóa một branch?
- Trong trường hợp branch chúng ta tạo ra trước đó không còn cần thiết nữa, ta có thể tiến hành xóa chúng đi bằng cách sử dụng các lệnh như sau:
	- Đối với local branch:
	```bash
	$ git branch -d <tên-branch>
	```
	Với cách xóa trên, nếu branch cần xóa chưa được gộp thay đổi với branch khác sẽ lập tức báo lỗi và yêu cầu gộp với branch khác trước khi thực hiện xóa bằng lệnh này
	```bash
	$ git branch -D <tên-branch>
	```
	Với cách xóa này thì branch được chỉ định sẽ lập tức bị xóa kể cả trong trường hợp nó chưa được gộp với branch khác
	
	- Đối với remote branch:
	```bash
	$ git push --delete <tên-remote> <tên-branch>
	```
	hoặc
	```bash
	$ git push <tên-remote> --delete <tên-branch>
	```
*Lưu ý: Đối với cả local branch và remote branch ta có thể tiến hành xóa đồng thời nhiều branch bằng cách liệt kê tên các branch cần xóa liền nối tiếp nhau và cách nhau một khoảng trắng*

### Push local branch lên remote server với một tên khác
- Thông thường khi chúng ta tiến hành push một local branch lên remote server thì tên branch mặc định của remote branch lúc này sẽ là tên của local branch, lệnh push như sau:
```bash
$ git push <tên-remote> <tên-branch>
```
- Nhưng nếu ta muốn đổi tên của remote branch đó trên server thì ta cần sử dụng lệnh như sau:
```
git push <tên-remote> <tên-branch>:<tên-remote-branch>
```

### Phân biệt rebase và merge
- Khi muốn tiến hành gộp 2 branch lại với nhau, ta có thể sử dụng một trong hai lệnh sau:
```bash
$ git merge <tên-branch>
```
hoặc
```bash
$ git rebase <tên-branch>
```
Sẽ tiến hành gộp branch hiện tại với branch mà ta lựa chọn. Tuy có cùng chức năng là gộp branch nhưng cách hoạt động của merge và rebase lại khác với nhau, ta có thể so sánh sự khác biệt như sau:
- Giả sử ta có 2 branch cần gộp với nhau như hình sau:  
![](/images/5_1.png)
- Đối với sử dụng merge kết quả thu được sẽ như sau:  
![](/images/5_2.png)  
Việc sử dụng merge sẽ tạo ra một commit mới là kết hợp từ 2 commit cuối cùng của 2 nhánh cần gộp vào với nhau   
Log commit sẽ không bị thay đổi và thứ tự các commit sẽ được sắp xếp theo thời gian tạo commit
- Đối với sử dụng rebase kết quả thu được sẽ như sau:  
![](/images/5_3.png)  
Rebase sẽ đưa toàn bộ branch Feature lên 'đầu' branch master
Log commit sẽ bị thay đổi theo

### Khác nhau giữa fetch và pull
- Khi muốn cập nhạt các thay đổi từ trên remote server về local repository ta cũng có hai cách để thực hiện điều này như sau:
```bash
$ git pull <tên-remote> <tên-remote-branch>
```
Lệnh này sẽ tiến hành kéo các thay đổi từ trên remote server về local của chúng ta đồng thời tiến hành merge các thay đổi đó ngay
```bash
$ git fetch <tên-remote> <tên-remote-branch>
```
Đối với lệnh fetch, các thay đổi từ remote server sẽ được kéo về máy nhưng không tự động merge vào source code của chúng ta mà chúng ta có thể thực hiện việc này sau khi đã review lại các thay dổi đó trước khi tiến hành merge. Các thay đổi này được đẩy sang một branch khác mà ta có thể sử dụng lệnh:
```bash
$ git branch -a
```
Để xem được các branch sau khi fetch đồng thời cũng có thể checkout sang branch đó để xem các thay đổi.
- Có thể hiểu đơn giản lại sự khác nhau giữa fetch và pull như sau:
```bash
git pull = git fetch + git merge 
```

### Thế nào là git stash?
- Trong quá trình chúng ta làm việc, có những lúc chúng ta đang code dở một chức năng nào đó nhưng bất ngờ ở một chức năng trên branch khác đang có lỗi cần phải sửa gấp và chúng ta muốn lưu lại thay đổi đã làm trên nhánh hiện tại nhưng không muốn thực hiện commit dư thừa thì git stash là lệnh mà chúng ta có thể dùng để giải quyết vấn đề này.
- git stash cho bạn khả năng lưu lại những thay đổi mà bạn đã tạo ra mà không cần thiết phải commit nó giúp bạn có thể dễ dàng chuyển sang nhánh khác làm việc và sau đó quay lại và tiếp tục những gì bạn đang làm ở nhánh đó.
- Các lệnh liên quan đến git stash
	- **Để lưu được những thay đổi mà không cần commit nó, ta cần thực hiện những lệnh sau:**
	Đưa toàn bộ các thay đổi đó vào trạng thái staged
	```bash
	$ git add .
	```
	Sau đó sử dụng lệnh sau để lưu các thay đổi mà không cần commit:
	```bash
	$ git stash # 
	```
	hoặc
	```bash
	$ git stash save 
	```
	- **Để xem lại các thay đổi đã lưu, ta có thể dùng các lệnh sau:**
	```bash
	$ git stash list
	stash@{0}: WIP on <branch-name>: <lastest commit>
	stash@{1}: WIP on <branch-name>: <lastest commit>
	stash@{2}: WIP on <branch-name>: <lastest commit>
	```
	- **Để xem lại danh sách các lần đã lưu, trong trường hợp muốn xem nội dung thay đổi thì ta sử dụng lệnh sau:**
	```bash
	$ git stash list -p
	```
	- **Hoặc nếu muốn xem cụ thể nội dung thay đổi của một lần lưu cụ thể, ta dùng lệnh:**
	```bash
	$ git stash show "stash@{n}"
	# với n là lần lưu tương ứng trong danh sách
	# Lưu ý phần stash@{n} phải nằm trong cặp ngoặc đôi
	```
	- **Để lấy lại thay đổi được lưu trong danh sách trên ta dùng lệnh:**
	```bash
	$ git stash apply "stash@{n}"
	```
	Hoặc lấy thay đổi gần nhất và xóa lần lưu trước đó
	```bash 
	$ git stash pop
	```
	- **Để xóa danh sách các thay đổi đã lưu, ta dùng lệnh:**
	```bash
	$ git stash drop "stash@{n}"
	```
	Để drop một lần lưu chỉ định hoặc 
	```bash 
	$ git stash clear 
	```
	Để xóa toàn bộ những lần đã lưu 

### Làm thế nào để xóa bỏ trạng thái vài commit gần đây?
- Để thực hiện công việc này chúng ta có thể sử dụng 1 trong 2 lệnh sau:
```bash 
$ git revert <commit-hash-code>
```
Lệnh này sẽ tạo ra một commit mới đảo ngược lại những thay đổi trong commit được chỉ định
```bash
$ git reset --hard <commit-hash-code>
```
Lệnh này sẽ xóa toàn bộ các commit trước đó và đưa branch hiện tại trở về trạng thái của commit-hash-code đã chọn

### Gộp một vài commit thành một commit duy nhất?
- Đôi khi trong lúc làm việc, ta thường tạo ra một số commit dư thừa và sau đó muốn gộp chung số commit đó lại với một messenger rõ ràng hơn về mục đích chung của toàn bộ các commit đó. Để làm được điều này, ta có thể sử dụng những lệnh sau:
```bash 
$ git rebase -i <commit-hash-code>
```
Với commit-hash-code là hash code của commit cuối cùng của nhóm cần gộp hoặc
```bash 
$ git rebase -i HEAD~<index>
```
Với index là số lượng commit cần gộp so với commit cuối cùng. Ngoài ra khi thực hiện việc rebase để gộp commit, ta có các lựa chọn khác như pick|squash|fixup để quyết định kiểu gộp.  
Cuối cùng ta cũng có thể dùng lệnh sau để gộp commit:
```bash
$ git reset --soft <commit-hash-code>
$ git add .
$ git commit -m "New commit"
```
Với commit-hash-code là mã hash của commit trước đó mà ta muốn gộp lại từ commit cuối cùng đến commit chỉ định.

### Phân biệt giữa git reset, reset --soft, reset --hard 
```bash
$ git reset <commit-hash-code>
```
Sẽ di chuyển HEAD về phía commit được chỉ định nhưng vẫn giữ nguyên trạng thái thay đổi của các file và đồng thời loại bỏ các file đó khỏi trạng thái staged
```bash
$ git reset --soft <commit-hash-code>
```
Tương tự như git reset nhưng toàn bộ các file vẫn giữ được trạng thái staged
```bash
$ git reset --hard <commit-hash-code>
```
Tương tự như 2 lệnh trên nhưng toàn bộ sự thay đổi của các file sẽ bị loại bỏ hoàn toàn nên hãy chú ý khi dùng lệnh này để tránh rơi vào trường hợp bao nhiêu công sức đổ xuống sông xuống biển :D

### Thế nào là cherry-pick? 
- Bạn có thể hiểu cherry-pick cũng có một số điểm tương đồng với merge và rebase là lấy thay đổi từ một branch này và gộp vào branch khác. Nhưng điểm khác nhau lớn nhất giữa cherry-pick và merge, rebase là cherry-pick chỉ gộp một commit được chỉ định từ một nhánh khác vào nhánh hiện tại trong khi merge và rebase sẽ gộp toàn bộ các commit lại. Để sử dụng cherry-pick, ta cần xem lại log các commit sau đó lấy mã hash của commit cần được cherry-pick và checkout sang nhánh cần được gộp commit của mã hash kia và thực hiện lệnh:
```bash
$ git cherry-pick <commit-hash-code>
```
- Một hình minh họa cho cherry-pick:  
![](/images/10_1.png)  
	- Giả sử ta muốn lấy commit C từ branch master và gộp vào branch cherry-pick
	- Sau khi thực hiện lệnh cherry-pick như đề cập ở trên, đây sẽ là kết quả ta thu được
![](/images/10_2.png)
	- Như ta có thể thấy commit C từ branch master được gộp vào với branch cherry-pick dưới tên commit C'  

### Git flow là gì?
- Git flow là một quy trình làm việc với git được thiết kế bởi Vincent Driessen. Git flow đưa ra một mô hình phân nhánh giúp hỗ trợ việc quản lý các dự án lơn dễ dàng hơn. Sơ đồ tổng quan:  
![](/images/10_3.png)  
- Các branch trong gitflow
	- Master branch: là branch dùng cho sản phẩm chính thức. Đây luôn là branch ổn định nhất và nó chứa lịch sử các lần release của dự án.
	- Develop branch: là branch dùng cho sản phẩm trong quá trình phát triển
	- Feature: mỗi tính năng mới cho sản phẩm sẽ được tạo và phát triển trên một branch mới với tên quy ước feature/tên-branch. Các **feature** này sẽ tạo ra từ **develop branch** và khi được hoàn thiện sẽ được gộp trở lại với **develop branch** (*Lưu ý: các Feature không được phép gộp trực tiếp với master branch*)
	- Realease: khi **develop branch** đã có đủ số tính năng cần thiết để có thể release, ta có thể tạo branch mới với tên quy ước release/tên-version. Branch này sau khi được tạo xong sẽ tiến hành merge nó với đồng thời cả **master branch** và **develop branch**
	- hotfix branch: khi sản phẩm trên **master branch** của chúng ta gặp phải trục trặc và cần có bản vá ngay lập tức thì ta sẽ tạo ra **hotfix branch**. Branch này tương tự như **release branch** nhưng nó được tạo ra từ **master branch** thay vì từ **develop branch** như release (*Lưu ý:* ***hotfix branch*** *cũng cần được gộp lại với* ***master branch*** *với* ***develop branch***)
- Các lệnh trong gitflow
	- Để khởi tạo một git-flow cho một project, ta dùng lệnh sau
	```bash
	$ git flow init 
	```
	Lệnh này sẽ tạo ra 2 branch ban đầu là master và develop
	- Để bắt đầu một feature ta dùng lệnh
	```bash
	$ git flow feature start <tên-feature>
	```
	Lệnh này sẽ tạo một branch mới có tên dạng feature/<tên-feature>
	- Sau khi feature đó được thực hiện xong, ta có thể công bố feature đó lên remote server để mọi người cùng có thể cập nhật bằng cách gõ lệnh:
	```bash
	$ git flow feature publish <tên-feature>
	```
	- Để tiến hành gộp branch đó vào **develop branch** ta dùng lệnh:
	```bash
	$ git flow feature finish <tên-feature>	
	```
	- Để tạo ra một bản release ta dùng lệnh:
	```bash
	$ git flow release start <version-no>
	```
	- Để tiến hành merge bản release đó vào **master branch** và **develop branch** ta dùng lệnh:
	```bash
	$ git flow release finish <version-no>
	```
	- Để tạo một bản hotfix ta dùng lệnh:
	```bash
	$ git flow hotfix start <tên-hotfix>
	```
	- Sau khi bản hotfix hoàn thiện ta có thể tiến hành merge lại với **master branch** và **develop branch** như sau:
	```bash
	$ git flow hotfix finish <tên-hotfix>
	```


