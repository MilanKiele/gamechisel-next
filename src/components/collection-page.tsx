"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ViewWorkButton } from "@/components/ui/view-work-button"
import { 
  Upload,
  Download,
  Link,
  Plus,
  Package,
  Eye,
  Search,
  Grid3X3,
  List,
} from "lucide-react"
import { useState } from "react"

// Mock data for 3D models
const mockModels = [
  {
    id: 1,
    name: "Sci-Fi Spaceship",
    description: "High-poly spaceship model perfect for sci-fi games",
    category: "Vehicles",
    format: "FBX",
    size: "2.3 MB",
    uploadDate: "2024-01-15",
    downloads: 1247,
    thumbnail: "/api/placeholder/300/200",
    downloadUrl: "https://example.com/models/spaceship.fbx",
    tags: ["sci-fi", "spaceship", "vehicle", "high-poly"]
  },
  {
    id: 2,
    name: "Medieval Castle",
    description: "Detailed castle model with textures and materials",
    category: "Architecture",
    format: "GLB",
    size: "5.8 MB",
    uploadDate: "2024-01-10",
    downloads: 892,
    thumbnail: "/api/placeholder/300/200",
    downloadUrl: "https://example.com/models/castle.glb",
    tags: ["medieval", "castle", "architecture", "detailed"]
  },
  {
    id: 3,
    name: "Fantasy Sword",
    description: "Ornate fantasy sword with magical effects",
    category: "Weapons",
    format: "OBJ",
    size: "1.2 MB",
    uploadDate: "2024-01-08",
    downloads: 2156,
    thumbnail: "/api/placeholder/300/200",
    downloadUrl: "https://example.com/models/sword.obj",
    tags: ["fantasy", "sword", "weapon", "magical"]
  },
  {
    id: 4,
    name: "Modern Car",
    description: "Realistic modern car model with interior",
    category: "Vehicles",
    format: "FBX",
    size: "8.1 MB",
    uploadDate: "2024-01-05",
    downloads: 743,
    thumbnail: "/api/placeholder/300/200",
    downloadUrl: "https://example.com/models/car.fbx",
    tags: ["car", "vehicle", "modern", "realistic"]
  }
]

const categories = ["All", "Vehicles", "Architecture", "Weapons", "Characters", "Environment", "Props"]

export function CollectionPage() {
  const [models, setModels] = useState(mockModels)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showUploadModal, setShowUploadModal] = useState(false)

  // Filter models based on search and category
  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || model.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation variant="landing" />

      <main>
        {/* Header Section */}
        <section className="wrap sp-lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="subtle">3D Model Collection</div>
            <h1 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
              Unity 3D Assets
            </h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Discover and download high-quality 3D models for your Unity projects. 
              Upload your own models or browse our curated collection.
            </p>
          </div>
        </section>

        {/* Controls Section */}
        <section className="wrap sp-md">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* View Controls and Upload */}
            <div className="flex items-center gap-4">
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              
              <Button onClick={() => setShowUploadModal(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Upload Model
              </Button>
            </div>
          </div>
        </section>

        {/* Models Grid/List */}
        <section className="wrap sp-lg">
          {filteredModels.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No models found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "space-y-4"
            }>
              {filteredModels.map((model) => (
                <Card key={model.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                        <Package className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <Badge className="absolute top-2 right-2 bg-background/80">
                        {model.format}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <CardTitle className="text-lg line-clamp-1">{model.name}</CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">
                          {model.description}
                        </CardDescription>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {model.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {model.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{model.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {model.downloads}
                          </span>
                          <span>{model.size}</span>
                        </div>
                        <span>{model.uploadDate}</span>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <ViewWorkButton href={model.downloadUrl}>
                          Download Model
                        </ViewWorkButton>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>Upload 3D Model</CardTitle>
                <CardDescription>
                  Add a new 3D model to the collection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="model-name">Model Name</Label>
                  <Input id="model-name" placeholder="Enter model name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="model-description">Description</Label>
                  <Textarea 
                    id="model-description" 
                    placeholder="Describe your model..."
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="e.g., Vehicles" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input id="tags" placeholder="tag1, tag2, tag3" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Upload Method</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Upload className="w-6 h-6" />
                      Upload File
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Link className="w-6 h-6" />
                      Link URL
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setShowUploadModal(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setShowUploadModal(false)}>
                    Upload Model
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}