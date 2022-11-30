from django.contrib import admin
from .models import Note

# Register your models here.
class NoteAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'note', 'created_at', 'updated_at']
    search_fields = ['title', 'note']
    raw_id_fields = ['user']

admin.site.register(Note, NoteAdmin)


