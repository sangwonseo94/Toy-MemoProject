/**
 * create // drag // display // fix // del
 * 
 */
// 메모추가버튼을 누를때 화면에 메모를 보여주기

$(function (){
	$("#createBtn").click(function(){
		
		new Memo().create();
	});
});



function Memo(){
	this.$note = null;
}

	Memo.prototype.create = function(){
		var $note = $(
			`	<div class ='memo-note'>
				<div class= "memo-bar">
					<span class="glyphicon glyphicon-chevron-up " aria-hidden="true"></span>
					<span class="glyphicon glyphicon-pushpin " aria-hidden="true"></span>
					<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
				</div>
				<div class='memo-edit'>
					<textarea class ='memo-edit-area'>
					</textarea>
				</div>		
				</div>`		
		);
		
		$note.appendTo($(".memo-area"));
		this.$note = $note;
		this.drag();
		var that = this;
		$note.find(".glyphicon-chevron-up").click(function(){
			that.display();
			
		});
		$note.find(".glyphicon-pushpin").click(function(){
			that.fix("glyphicon-pushpin");
			
		});
		$note.find(".trash").click(function(){
			that.del();
			
		});
	};
	
	
	Memo.prototype.display = function(){
		this.$note.toggleClass("h20");
		
	};
	Memo.prototype.fix = function(){
		this.$note.find(".glyphicon-pushpin").toggleClass("choice");
		if(this.$note.find(".glyphicon-pushpin").hasClass("choice")){
			this.$note.draggable("disable");
		}else {
			this.$note.draggable("enable");
		}
		
	};
	Memo.prototype.del = function(){
		this.$note.remove();
		
	};
	
	Memo.prototype.drag = function(){
		this.$note.draggable();	
	};
